<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Setting;

class InitialDataSeeder extends Seeder
{
    public function run(): void
    {
        // Seed Projects
        $projects = [
            [
                'title' => 'StudentMove – Smart Transportation App',
                'description' => 'A complete mobile solution for students to book and track transportation in real time. Designed seamless onboarding, booking flows, and route-tracking interfaces with a focus on simplicity and usability.',
                'tech_tags' => ['Figma', 'Mobile UI', 'UX Design'],
                'category' => 'Mobile App',
                'is_featured' => true,
                'is_active' => true,
                'order' => 1,
            ],
            [
                'title' => 'ERP Dashboard UI',
                'description' => 'An enterprise-grade dashboard design for business management systems. Built scalable components, data visualization layouts, and responsive design systems ready for developer handoff.',
                'tech_tags' => ['Dashboard UI', 'Design System', 'Data Viz'],
                'category' => 'Dashboard',
                'is_featured' => true,
                'is_active' => true,
                'order' => 2,
            ],
            [
                'title' => 'Finance & Consulting Landing Pages',
                'description' => 'Professional landing page templates created for ThemeForest, optimized for conversion and clean visual hierarchy with strong typography and color systems.',
                'tech_tags' => ['Landing Page', 'Typography', 'Conversion'],
                'category' => 'Landing Page',
                'is_featured' => true,
                'is_active' => true,
                'order' => 3,
            ],
            [
                'title' => 'E-Commerce Mobile App',
                'description' => 'Modern shopping experience with intuitive navigation, seamless checkout flow, and personalized product recommendations. Focused on conversion optimization and user engagement.',
                'tech_tags' => ['Mobile App', 'E-commerce', 'UX Design'],
                'category' => 'Mobile App',
                'is_featured' => false,
                'is_active' => true,
                'order' => 4,
            ],
            [
                'title' => 'Healthcare Management System',
                'description' => 'Comprehensive healthcare platform design for patient management, appointment scheduling, and medical records. Emphasized accessibility and data security.',
                'tech_tags' => ['Healthcare', 'Dashboard', 'Accessibility'],
                'category' => 'Dashboard',
                'is_featured' => false,
                'is_active' => true,
                'order' => 5,
            ],
            [
                'title' => 'Fitness Tracking App',
                'description' => 'Motivational fitness app with workout tracking, progress visualization, and social features. Designed to keep users engaged and motivated.',
                'tech_tags' => ['Mobile App', 'Fitness', 'Data Visualization'],
                'category' => 'Mobile App',
                'is_featured' => false,
                'is_active' => true,
                'order' => 6,
            ],
            [
                'title' => 'SaaS Product Dashboard',
                'description' => 'Clean and efficient dashboard for SaaS platform with analytics, user management, and settings. Focused on clarity and ease of use.',
                'tech_tags' => ['SaaS', 'Dashboard', 'Analytics'],
                'category' => 'Dashboard',
                'is_featured' => false,
                'is_active' => true,
                'order' => 7,
            ],
            [
                'title' => 'Food Delivery App',
                'description' => 'User-friendly food ordering app with restaurant browsing, menu selection, and real-time order tracking. Optimized for quick ordering experience.',
                'tech_tags' => ['Mobile App', 'Food Tech', 'UX Design'],
                'category' => 'Mobile App',
                'is_featured' => false,
                'is_active' => true,
                'order' => 8,
            ],
            [
                'title' => 'Real Estate Platform',
                'description' => 'Property listing and search platform with advanced filters, virtual tours, and agent profiles. Designed for both buyers and sellers.',
                'tech_tags' => ['Web App', 'Real Estate', 'Search UI'],
                'category' => 'Web App',
                'is_featured' => false,
                'is_active' => true,
                'order' => 9,
            ],
            [
                'title' => 'Education Learning Platform',
                'description' => 'Interactive learning management system with course browsing, progress tracking, and student-teacher communication features.',
                'tech_tags' => ['Education', 'Web App', 'Learning'],
                'category' => 'Web App',
                'is_featured' => false,
                'is_active' => true,
                'order' => 10,
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(
                ['title' => $project['title']],
                $project
            );
        }

        // Seed Skills
        $skills = [
            [
                'title' => 'User-Centered Design Thinking',
                'description' => 'Creating designs that prioritize user needs and business goals',
                'icon' => '🎨',
                'order' => 1,
            ],
            [
                'title' => 'Figma Prototyping',
                'description' => 'Auto-layout, Components, Design Systems',
                'icon' => '🧩',
                'order' => 2,
            ],
            [
                'title' => 'Responsive UI Design',
                'description' => 'Web, Mobile, and Dashboard interfaces',
                'icon' => '📱',
                'order' => 3,
            ],
            [
                'title' => 'Wireframing & User Flows',
                'description' => 'Structuring information architecture',
                'icon' => '🔍',
                'order' => 4,
            ],
            [
                'title' => 'Feedback-driven Iteration',
                'description' => 'Continuous improvement and developer handoff',
                'icon' => '🔁',
                'order' => 5,
            ],
            [
                'title' => 'AI-Assisted Design Workflows',
                'description' => 'Copy, naming, brainstorming with AI tools',
                'icon' => '🤖',
                'order' => 6,
            ],
        ];

        foreach ($skills as $skill) {
            Skill::updateOrCreate(
                ['title' => $skill['title']],
                $skill
            );
        }

        // Seed Experiences
        $experiences = [
            [
                'title' => 'Accenture North America',
                'description' => 'Product Design Simulation on Forage, focusing on feature iteration and UX improvements',
                'icon' => '✅',
                'order' => 1,
            ],
            [
                'title' => 'Real-world Projects',
                'description' => 'Contributed to task-based internships, applying practical design thinking to solve user problems',
                'icon' => '💼',
                'order' => 2,
            ],
            [
                'title' => 'Remote Collaboration',
                'description' => 'Frequently applies for remote roles to expand skills and collaborate on diverse product teams',
                'icon' => '🌍',
                'order' => 3,
            ],
        ];

        foreach ($experiences as $experience) {
            Experience::updateOrCreate(
                ['title' => $experience['title']],
                $experience
            );
        }

        // Seed Settings (default values)
        $defaultSettings = [
            'profile_name' => 'Md. Shadman Tahsin',
            'profile_role' => 'UI/UX DESIGNER',
            'profile_bio' => 'UI/UX Designer • Frontend Developer • Creative Problem Solver',
            'profile_image' => 'assets/images/profile.jpg',
            'resume_file' => 'assets/Md_Julfikar_Hasan_CV.pdf',
            'experience_years' => '1.5',
            'clients_count' => '5',
            'projects_count' => '12+',
            'about_text_1' => '👋 Hi, I\'m Md. Shadman Tahsin – UI/UX Designer',
            'about_text_2' => 'I design intuitive digital experiences that solve real problems and bring ideas to life. Passionate about user-centered design, AI-driven workflows, and creating products that people love to use.',
            'about_text_3' => 'I\'m currently pursuing my BSc in Computer Science & Engineering at Daffodil International University, blending technical understanding with creative design skills. My approach is driven by user-centered design thinking, rapid prototyping in Figma, and a love for solving complex design challenges with simple, functional solutions.',
            'contact_email' => 'md.shadmantahsinfzs@gmail.com',
            'contact_phone' => '01764819519',
            'contact_location' => 'Bangladesh',
            'behance_url' => 'https://www.behance.net/mdsha0242220',
            'linkedin_url' => 'https://www.linkedin.com/in/md-shadman-tahsin-676a862b4',
            'dribbble_url' => '',
            'github_url' => 'https://github.com/Tahis-Fzs',
            'facebook_url' => 'https://www.facebook.com/share/17ZhPouzcB/',
        ];

        foreach ($defaultSettings as $key => $value) {
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }
    }
}

