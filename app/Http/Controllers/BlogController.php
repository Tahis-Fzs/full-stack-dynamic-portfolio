<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $posts = [
            [
                'title' => 'Designing for Accessibility: A UX Guide',
                'excerpt' => 'Learn how to create inclusive designs that work for everyone.',
                'date' => '2024-12-01',
                'category' => 'UX Design'
            ],
            [
                'title' => 'Figma Tips: Mastering Auto-Layout',
                'excerpt' => 'Advanced techniques for creating responsive designs in Figma.',
                'date' => '2024-11-15',
                'category' => 'Tools'
            ],
            [
                'title' => 'The Future of AI in Design',
                'excerpt' => 'Exploring how AI tools are transforming the design workflow.',
                'date' => '2024-11-01',
                'category' => 'AI & Design'
            ],
        ];
        
        return view('pages.blog', compact('posts'));
    }
}

