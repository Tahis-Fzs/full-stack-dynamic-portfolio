@extends('layouts.app')

@section('title', 'Blog - Md. Shadman Tahsin')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/blog.css') }}">
@endpush

@section('content')
    <section class="blog-section">
        <h1>Design Blog</h1>
        <p class="blog-subtitle">Thoughts, tips, and insights on UI/UX design</p>
        
        <div class="blog-grid">
            @foreach($posts as $post)
            <article class="blog-card">
                <div class="blog-category">{{ $post['category'] }}</div>
                <h3>{{ $post['title'] }}</h3>
                <p class="blog-excerpt">{{ $post['excerpt'] }}</p>
                <div class="blog-meta">
                    <span class="blog-date">{{ date('M d, Y', strtotime($post['date'])) }}</span>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </article>
            @endforeach
        </div>
    </section>
@endsection

