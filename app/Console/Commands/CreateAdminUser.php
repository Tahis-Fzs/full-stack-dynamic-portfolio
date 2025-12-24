<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    protected $signature = 'admin:create {--email=} {--password=} {--name=Admin}';
    protected $description = 'Create or update admin user. Usage: php artisan admin:create --email=your@email.com --password=yourpassword --name="Your Name"';

    public function handle()
    {
        // Get admin credentials from command options, environment, or ask interactively
        $email = $this->option('email') ?: env('ADMIN_EMAIL');
        $password = $this->option('password') ?: env('ADMIN_PASSWORD');
        $name = $this->option('name') ?: env('ADMIN_NAME', 'Admin');

        // If not provided via options or env, ask interactively
        if (empty($email)) {
            $email = $this->ask('Enter admin email address');
        }
        if (empty($password)) {
            $password = $this->secret('Enter admin password');
        }

        if (empty($email) || empty($password)) {
            $this->error('Email and password are required!');
            $this->info('Usage: php artisan admin:create --email=your@email.com --password=yourpassword --name="Your Name"');
            return 1;
        }

        $admin = User::where('email', $email)->first();

        if ($admin) {
            $admin->update([
                'name' => $name,
                'password' => Hash::make($password),
                'is_admin' => true,
            ]);
            $this->info('Admin user updated successfully!');
        } else {
            User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($password),
                'is_admin' => true,
            ]);
            $this->info('Admin user created successfully!');
        }

        $this->info("Email: {$email}");
        $this->info("Password: [hidden]");
        $this->info("\nYou can now login at: http://localhost:8000/admin/login");
        
        return 0;
    }
}
