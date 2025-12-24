<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        try {
            $settings = [
                'email' => Setting::get('contact_email', 'md.shadmantahsinfzs@gmail.com'),
                'phone' => Setting::get('contact_phone', '01764819519'),
                'location' => Setting::get('contact_location', 'Bangladesh'),
                'behance_url' => Setting::get('behance_url', 'https://www.behance.net/mdsha0242220'),
                'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/md-shadman-tahsin-676a862b4'),
                'dribbble_url' => Setting::get('dribbble_url', ''),
                'github_url' => Setting::get('github_url', 'https://github.com/Tahis-Fzs'),
                'facebook_url' => Setting::get('facebook_url', 'https://www.facebook.com/share/17ZhPouzcB/'),
            ];
        } catch (\Exception $e) {
            $settings = [
                'email' => 'md.shadmantahsinfzs@gmail.com',
                'phone' => '01764819519',
                'location' => 'Bangladesh',
                'behance_url' => 'https://www.behance.net/mdsha0242220',
                'linkedin_url' => 'https://www.linkedin.com/in/md-shadman-tahsin-676a862b4',
                'dribbble_url' => '',
                'github_url' => 'https://github.com/Tahis-Fzs',
                'facebook_url' => 'https://www.facebook.com/share/17ZhPouzcB/',
            ];
        }
        
        return view('pages.contact', compact('settings'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        try {
            ContactMessage::create($validated);
            return redirect()->route('contact')->with('success', 'Message sent successfully!');
        } catch (\Exception $e) {
            return redirect()->route('contact')->with('error', 'Database not configured. Please configure database first.');
        }
    }
}

