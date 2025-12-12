<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    public function index()
    {
        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'role' => 'Product Manager',
                'company' => 'TechStart Inc.',
                'content' => 'Working with Shadman was a game-changer. His attention to detail and user-centered approach transformed our product.',
                'rating' => 5
            ],
            [
                'name' => 'Michael Chen',
                'role' => 'CEO',
                'company' => 'DesignCo',
                'content' => 'Exceptional design skills and great communication. Delivered exactly what we needed, on time.',
                'rating' => 5
            ],
            [
                'name' => 'Emily Rodriguez',
                'role' => 'Founder',
                'company' => 'StartupXYZ',
                'content' => 'The best UI/UX designer we\'ve worked with. Highly recommend for any design project.',
                'rating' => 5
            ],
        ];
        
        return view('pages.testimonials', compact('testimonials'));
    }
}

