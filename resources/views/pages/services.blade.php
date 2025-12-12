@extends('layouts.app')

@section('title', 'Services - Md. Shadman Tahsin')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/services.css') }}">
@endpush

@section('content')
    <section class="services-section">
        <h1>My Services</h1>
        
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.</p>
                <ul>
                    <li>User Research & Analysis</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Visual Design</li>
                    <li>Design Systems</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">📱</div>
                <h3>Mobile App Design</h3>
                <p>Designing mobile-first experiences that are both functional and delightful across all devices.</p>
                <ul>
                    <li>iOS & Android Design</li>
                    <li>Responsive Layouts</li>
                    <li>App Store Assets</li>
                    <li>User Flow Design</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">💻</div>
                <h3>Web Design</h3>
                <p>Modern, responsive web designs that convert visitors into customers and showcase your brand.</p>
                <ul>
                    <li>Landing Pages</li>
                    <li>Dashboard Design</li>
                    <li>E-commerce UI</li>
                    <li>Brand Identity</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">🔍</div>
                <h3>UX Research</h3>
                <p>Data-driven insights to understand user behavior and optimize product experiences.</p>
                <ul>
                    <li>User Interviews</li>
                    <li>Usability Testing</li>
                    <li>Competitive Analysis</li>
                    <li>Persona Development</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">🎯</div>
                <h3>Design Consulting</h3>
                <p>Strategic design guidance to help your team make better product decisions.</p>
                <ul>
                    <li>Design Strategy</li>
                    <li>Process Improvement</li>
                    <li>Team Training</li>
                    <li>Design Reviews</li>
                </ul>
            </div>
            
            <div class="service-card">
                <div class="service-icon">🚀</div>
                <h3>Prototyping</h3>
                <p>Interactive prototypes that bring your ideas to life before development begins.</p>
                <ul>
                    <li>Figma Prototypes</li>
                    <li>Interactive Mockups</li>
                    <li>User Testing</li>
                    <li>Developer Handoff</li>
                </ul>
            </div>
        </div>
        
        <div class="cta-section">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to create something amazing.</p>
            <a href="{{ route('contact') }}" class="cta-button">Get In Touch</a>
        </div>
    </section>
@endsection

