@extends('admin.layout')

@section('title', 'Settings')

@section('content')
    <h2>Settings</h2>
    
    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data" style="max-width: 800px;">
        @csrf
        <h3>Profile Settings</h3>
        <div>
            <label>Profile Name</label>
            <input type="text" name="profile_name" value="{{ $settings['profile_name'] ?? '' }}">
        </div>
        <div>
            <label>Profile Role</label>
            <input type="text" name="profile_role" value="{{ $settings['profile_role'] ?? '' }}">
        </div>
        <div>
            <label>Profile Bio</label>
            <textarea name="profile_bio" rows="3">{{ $settings['profile_bio'] ?? '' }}</textarea>
        </div>
        <div>
            <label>Profile Image</label>
            @if(isset($settings['profile_image']))
                @php
                    $imagePath = $settings['profile_image'];
                    if (strpos($imagePath, 'profile/') === 0 || strpos($imagePath, 'resume/') === 0) {
                        // Use Storage facade to generate correct URL
                        $imageUrl = \Illuminate\Support\Facades\Storage::disk('public')->url($imagePath);
                        // Add cache-busting parameter based on file modification time
                        try {
                            $fullPath = storage_path('app/public/' . $imagePath);
                            if (file_exists($fullPath)) {
                                $imageUrl .= '?v=' . filemtime($fullPath);
                            }
                        } catch (\Exception $e) {
                            // If file doesn't exist or can't get mtime, just use URL without cache-busting
                        }
                    } else {
                        $imageUrl = asset($imagePath);
                    }
                @endphp
                <div style="margin-bottom: 1rem;">
                    <img src="{{ $imageUrl }}" alt="Current Profile Image" style="max-width: 200px; height: auto; border-radius: 8px; border: 1px solid #ddd;" onerror="this.src='{{ asset('assets/images/profile.jpg') }}'">
                </div>
            @endif
            <input type="file" name="profile_image" accept="image/*">
            <small style="display: block; color: #666; margin-top: 0.5rem;">Current: {{ $settings['profile_image'] ?? 'assets/images/profile.jpg' }}</small>
        </div>
        <div>
            <label>Resume File</label>
            <input type="file" name="resume_file" accept=".pdf">
        </div>
        
        <h3 style="margin-top: 2rem;">Statistics</h3>
        <div>
            <label>Experience Years</label>
            <input type="text" name="experience_years" value="{{ $settings['experience_years'] ?? '' }}">
        </div>
        <div>
            <label>Clients Count</label>
            <input type="text" name="clients_count" value="{{ $settings['clients_count'] ?? '' }}">
        </div>
        <div>
            <label>Projects Count</label>
            <input type="text" name="projects_count" value="{{ $settings['projects_count'] ?? '' }}">
        </div>
        
        <h3 style="margin-top: 2rem;">About Page</h3>
        <div>
            <label>About Text 1</label>
            <textarea name="about_text_1" rows="2">{{ $settings['about_text_1'] ?? '' }}</textarea>
        </div>
        <div>
            <label>About Text 2</label>
            <textarea name="about_text_2" rows="3">{{ $settings['about_text_2'] ?? '' }}</textarea>
        </div>
        <div>
            <label>About Text 3</label>
            <textarea name="about_text_3" rows="3">{{ $settings['about_text_3'] ?? '' }}</textarea>
        </div>
        
        <h3 style="margin-top: 2rem;">Contact Settings</h3>
        <div>
            <label>Email</label>
            <input type="email" name="contact_email" value="{{ $settings['contact_email'] ?? '' }}">
        </div>
        <div>
            <label>Phone</label>
            <input type="text" name="contact_phone" value="{{ $settings['contact_phone'] ?? '' }}">
        </div>
        <div>
            <label>Location</label>
            <input type="text" name="contact_location" value="{{ $settings['contact_location'] ?? '' }}">
        </div>
        
        <h3 style="margin-top: 2rem;">Social Links</h3>
        <div>
            <label>Behance URL</label>
            <input type="url" name="behance_url" value="{{ $settings['behance_url'] ?? '' }}">
        </div>
        <div>
            <label>LinkedIn URL</label>
            <input type="url" name="linkedin_url" value="{{ $settings['linkedin_url'] ?? '' }}">
        </div>
        <div>
            <label>Dribbble URL</label>
            <input type="url" name="dribbble_url" value="{{ $settings['dribbble_url'] ?? '' }}">
        </div>
        <div>
            <label>GitHub URL</label>
            <input type="url" name="github_url" value="{{ $settings['github_url'] ?? '' }}">
        </div>
        
        <div style="margin-top: 2rem;">
            <button type="submit" class="btn btn-primary">Save Settings</button>
        </div>
    </form>
@endsection


