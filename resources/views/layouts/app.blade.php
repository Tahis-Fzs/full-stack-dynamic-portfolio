<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Md. Shadman Tahsin - Portfolio')</title>
    @stack('styles')
</head>
<body>
    <header>
        <div class="logo">
            <span class="logo-text">SHADMAN</span>
            <span class="logo-dot"></span>
        </div>
        <nav>
            <ul>
                <li><a href="{{ route('home') }}" class="{{ request()->routeIs('home') ? 'active' : '' }}">Home</a></li>
                <li><a href="{{ route('about') }}" class="{{ request()->routeIs('about') ? 'active' : '' }}">About</a></li>
                <li><a href="{{ route('works') }}" class="{{ request()->routeIs('works') ? 'active' : '' }}">Works</a></li>
                <li><a href="{{ route('services') }}" class="{{ request()->routeIs('services') ? 'active' : '' }}">Services</a></li>
                <li><a href="{{ route('blog') }}" class="{{ request()->routeIs('blog') ? 'active' : '' }}">Blog</a></li>
                <li><a href="{{ route('testimonials') }}" class="{{ request()->routeIs('testimonials') ? 'active' : '' }}">Testimonials</a></li>
                <li><a href="{{ route('contact') }}" class="{{ request()->routeIs('contact') ? 'active' : '' }}">Contact</a></li>
            </ul>
        </nav>
        @php
            use App\Models\Setting;
            try {
                $resumePathValue = Setting::get('resume_file', 'assets/Md_Julfikar_Hasan_CV.pdf');
            } catch (\Exception $e) {
                $resumePathValue = 'assets/Md_Julfikar_Hasan_CV.pdf';
            }
            $resumePath = (strpos($resumePathValue, 'resume/') === 0 || strpos($resumePathValue, 'profile/') === 0) 
                ? asset('storage/' . $resumePathValue) 
                : asset($resumePathValue);
        @endphp
        <a href="{{ $resumePath }}" class="resume-btn" download>My Resume</a>
    </header>

    <main>
        @yield('content')
    </main>

    @hasSection('footer')
        @yield('footer')
    @endif

    @stack('scripts')
</body>
</html>
