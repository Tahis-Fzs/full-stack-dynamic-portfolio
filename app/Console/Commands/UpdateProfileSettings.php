<?php

namespace App\Console\Commands;

use App\Models\Setting;
use Illuminate\Console\Command;

class UpdateProfileSettings extends Command
{
    protected $signature = 'profile:update 
                            {--name=} 
                            {--role=} 
                            {--bio=} 
                            {--email=} 
                            {--phone=} 
                            {--location=}
                            {--about1=}
                            {--about2=}
                            {--about3=}';
    protected $description = 'Update profile settings. Usage: php artisan profile:update --name="Your Name" --role="Your Role" --bio="Your Bio"';

    public function handle()
    {
        $this->info('=== Update Profile Settings ===');
        $this->newLine();

        // Get current settings
        $currentName = Setting::get('profile_name', 'Your Name');
        $currentRole = Setting::get('profile_role', 'Your Role');
        $currentBio = Setting::get('profile_bio', 'Your Bio');
        $currentEmail = Setting::get('contact_email', 'your@email.com');
        $currentPhone = Setting::get('contact_phone', '+1234567890');
        $currentLocation = Setting::get('contact_location', 'Your Location');
        $currentAbout1 = Setting::get('about_text_1', '👋 Hi, I\'m [Your Name] – [Your Role]');
        $currentAbout2 = Setting::get('about_text_2', 'Your description here...');
        $currentAbout3 = Setting::get('about_text_3', 'More details about you...');

        // Get values from options or ask interactively
        $profileName = $this->option('name') ?: ($this->ask('Profile Name', $currentName) ?: $currentName);
        $profileRole = $this->option('role') ?: ($this->ask('Profile Role/Title', $currentRole) ?: $currentRole);
        $profileBio = $this->option('bio') ?: ($this->ask('Profile Bio', $currentBio) ?: $currentBio);
        $contactEmail = $this->option('email') ?: ($this->ask('Contact Email', $currentEmail) ?: $currentEmail);
        $contactPhone = $this->option('phone') ?: ($this->ask('Contact Phone', $currentPhone) ?: $currentPhone);
        $contactLocation = $this->option('location') ?: ($this->ask('Contact Location', $currentLocation) ?: $currentLocation);
        $aboutText1 = $this->option('about1') ?: ($this->ask('About Text 1 (Introduction)', $currentAbout1) ?: $currentAbout1);
        $aboutText2 = $this->option('about2') ?: ($this->ask('About Text 2 (Description)', $currentAbout2) ?: $currentAbout2);
        $aboutText3 = $this->option('about3') ?: ($this->ask('About Text 3 (Details)', $currentAbout3) ?: $currentAbout3);

        // Update settings
        Setting::updateOrCreate(['key' => 'profile_name'], ['value' => $profileName]);
        Setting::updateOrCreate(['key' => 'profile_role'], ['value' => $profileRole]);
        Setting::updateOrCreate(['key' => 'profile_bio'], ['value' => $profileBio]);
        Setting::updateOrCreate(['key' => 'contact_email'], ['value' => $contactEmail]);
        Setting::updateOrCreate(['key' => 'contact_phone'], ['value' => $contactPhone]);
        Setting::updateOrCreate(['key' => 'contact_location'], ['value' => $contactLocation]);
        Setting::updateOrCreate(['key' => 'about_text_1'], ['value' => $aboutText1]);
        Setting::updateOrCreate(['key' => 'about_text_2'], ['value' => $aboutText2]);
        Setting::updateOrCreate(['key' => 'about_text_3'], ['value' => $aboutText3]);

        $this->newLine();
        $this->info('✅ Profile settings updated successfully!');
        $this->info('Note: To update your profile picture, use the admin panel at /admin/settings');
        
        return 0;
    }
}

