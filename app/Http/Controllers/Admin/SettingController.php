<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{
    public function index()
    {
        $settings = [
            'profile_name' => Setting::get('profile_name', 'Md. Shadman Tahsin'),
            'profile_role' => Setting::get('profile_role', 'UI/UX DESIGNER'),
            'profile_bio' => Setting::get('profile_bio', 'UI/UX Designer • Frontend Developer • Creative Problem Solver'),
            'profile_image' => Setting::get('profile_image', 'assets/images/profile.jpg'),
            'resume_file' => Setting::get('resume_file', 'assets/Md_Julfikar_Hasan_CV.pdf'),
            'experience_years' => Setting::get('experience_years', '1.5'),
            'clients_count' => Setting::get('clients_count', '5'),
            'projects_count' => Setting::get('projects_count', '12+'),
            'about_text_1' => Setting::get('about_text_1', '👋 Hi, I\'m Md. Shadman Tahsin – UI/UX Designer'),
            'about_text_2' => Setting::get('about_text_2', 'I design intuitive digital experiences...'),
            'about_text_3' => Setting::get('about_text_3', 'I\'m currently pursuing my BSc...'),
            'contact_email' => Setting::get('contact_email', 'mdjulfikerhasan191212@gmail.com'),
            'contact_phone' => Setting::get('contact_phone', '+8801890770297'),
            'contact_location' => Setting::get('contact_location', 'Bangladesh'),
            'behance_url' => Setting::get('behance_url', 'https://www.behance.net/mdjulfikerhasan'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/md-julfikar-hasan-282249215'),
            'dribbble_url' => Setting::get('dribbble_url', 'https://dribbble.com/hasan1912'),
            'github_url' => Setting::get('github_url', 'https://github.com/Julfiker-NpM'),
        ];

        return view('admin.settings.index', compact('settings'));
    }

    public function update(Request $request)
    {
        // Validate file uploads
        $request->validate([
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'resume_file' => 'nullable|mimes:pdf|max:5120',
        ]);

        // Use database transaction to ensure atomicity - all operations succeed or none do
        try {
            return DB::transaction(function () use ($request) {
                $uploadedProfileImage = null;
                $uploadedResumeFile = null;

                // Handle file uploads first (most likely to fail)
                // If upload fails, transaction will rollback before text fields are saved
                if ($request->hasFile('profile_image')) {
                    // Delete old profile image if it exists and is from storage
                    $oldImage = Setting::get('profile_image');
                    if ($oldImage && (strpos($oldImage, 'profile/') === 0)) {
                        Storage::disk('public')->delete($oldImage);
                    }
                    
                    $uploadedProfileImage = $request->file('profile_image')->store('profile', 'public');
                }

                if ($request->hasFile('resume_file')) {
                    // Delete old resume file if it exists and is from storage
                    $oldResume = Setting::get('resume_file');
                    if ($oldResume && (strpos($oldResume, 'resume/') === 0)) {
                        Storage::disk('public')->delete($oldResume);
                    }
                    
                    $uploadedResumeFile = $request->file('resume_file')->store('resume', 'public');
                }

                // Save file paths if uploads were successful
                if ($uploadedProfileImage !== null) {
                    $saved = Setting::set('profile_image', $uploadedProfileImage);
                    if (!$saved) {
                        throw new \Exception('Failed to save profile image setting');
                    }
                }

                if ($uploadedResumeFile !== null) {
                    $saved = Setting::set('resume_file', $uploadedResumeFile);
                    if (!$saved) {
                        throw new \Exception('Failed to save resume file setting');
                    }
                }

                // Update text fields only after file uploads succeed
                $fields = [
                    'profile_name', 'profile_role', 'profile_bio', 'experience_years',
                    'clients_count', 'projects_count', 'about_text_1', 'about_text_2',
                    'about_text_3', 'contact_email', 'contact_phone', 'contact_location',
                    'behance_url', 'linkedin_url', 'dribbble_url', 'github_url'
                ];

                foreach ($fields as $field) {
                    if ($request->has($field)) {
                        Setting::set($field, $request->input($field));
                    }
                }

                return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully!');
            });
        } catch (\Exception $e) {
            // Transaction automatically rolled back on exception
            return redirect()->route('admin.settings.index')
                ->with('error', 'Failed to update settings: ' . $e->getMessage());
        }
    }
}


