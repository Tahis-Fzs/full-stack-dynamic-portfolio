"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import {
  constellationSlugs,
  getProjectBySlug,
} from "@/content/projects";
import { categoryColors } from "@/lib/projects-ui";

interface NodeSpec {
  slug: string;
  title: string;
  position: [number, number, number];
  color: string;
  scale: number;
  live: boolean;
}

function buildNodes(): NodeSpec[] {
  const centerSlug = "paylite-x";
  const orbitSlugs = constellationSlugs.filter((s) => s !== centerSlug);
  const nodes: NodeSpec[] = [];

  const center = getProjectBySlug(centerSlug);
  if (center) {
    nodes.push({
      slug: centerSlug,
      title: center.title,
      position: [0, 0, 0],
      color: categoryColors[center.category],
      scale: 1.35,
      live: Boolean(center.liveUrl),
    });
  }

  const radius = 3.2;
  orbitSlugs.forEach((slug, index) => {
    const project = getProjectBySlug(slug);
    if (!project) return;
    const angle = (index / orbitSlugs.length) * Math.PI * 2 - Math.PI / 2;
    nodes.push({
      slug,
      title: project.title,
      position: [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.55,
        Math.sin(angle * 2) * 0.8,
      ],
      color: categoryColors[project.category],
      scale: 1,
      live: Boolean(project.liveUrl),
    });
  });

  return nodes;
}

function ProjectNode({
  node,
  active,
  onSelect,
}: {
  node: NodeSpec;
  active: boolean;
  onSelect: (slug: string) => void;
}) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y =
      node.position[1] + Math.sin(t * 1.2 + node.position[0]) * 0.06;
    meshRef.current.scale.setScalar(
      node.scale * (active ? 1.18 : 1) * (1 + Math.sin(t * 2) * 0.03),
    );
  });

  return (
    <group ref={groupRef} position={node.position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(node.slug);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onSelect(node.slug);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.28 * node.scale, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={active ? 1.4 : 0.65}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>

      {/* Glow shell */}
      <mesh scale={1.8}>
        <sphereGeometry args={[0.28 * node.scale, 16, 16]} />
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={active ? 0.18 : 0.08}
          depthWrite={false}
        />
      </mesh>

      {active && (
        <Html center distanceFactor={10} style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
            {node.title}
            {node.live && (
              <span className="ml-1.5 text-[var(--accent-cyan)]">● live</span>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

function ConnectionLines({ nodes }: { nodes: NodeSpec[] }) {
  const center = nodes[0]?.position ?? [0, 0, 0];

  const segments = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 1; i < nodes.length; i++) {
      lines.push([
        new THREE.Vector3(...center),
        new THREE.Vector3(...nodes[i].position),
      ]);
    }
    for (let i = 1; i < nodes.length; i++) {
      const next = i === nodes.length - 1 ? 1 : i + 1;
      lines.push([
        new THREE.Vector3(...nodes[i].position),
        new THREE.Vector3(...nodes[next].position),
      ]);
    }
    return lines;
  }, [nodes, center]);

  return (
    <>
      {segments.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#22d3ee"
          opacity={0.22}
          transparent
          lineWidth={1}
        />
      ))}
    </>
  );
}

function Scene({
  activeSlug,
  onSelect,
}: {
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  const nodes = useMemo(() => buildNodes(), []);
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <>
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 6, 16]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 6]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-5, -2, 3]} intensity={0.6} color="#e2136e" />

      <group ref={groupRef}>
        {nodes.map((node) => (
          <ProjectNode
            key={node.slug}
            node={node}
            active={activeSlug === node.slug}
            onSelect={onSelect}
          />
        ))}
        <ConnectionLines nodes={nodes} />
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

export function ConstellationCanvas({
  activeSlug,
  onSelect,
}: {
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 8.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: false }}
      style={{ background: "#020617" }}
    >
      <Scene activeSlug={activeSlug} onSelect={onSelect} />
    </Canvas>
  );
}

export function useConstellationState() {
  const router = useRouter();
  const [activeSlug, setActiveSlug] = useState("paylite-x");

  const activeProject = getProjectBySlug(activeSlug);

  const openProject = (slug: string) => {
    router.push(`/works/${slug}`);
  };

  return {
    activeSlug,
    setActiveSlug,
    activeProject,
    openProject,
  };
}
