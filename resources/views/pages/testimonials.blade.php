@extends('layouts.app')

@section('title', 'Testimonials - Md. Shadman Tahsin')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/testimonials.css') }}">
@endpush

@section('content')
    <section class="testimonials-section">
        <h1>What Clients Say</h1>
        <p class="testimonials-subtitle">Hear from people I've worked with</p>
        
        <div class="testimonials-grid">
            @foreach($testimonials as $testimonial)
            <div class="testimonial-card">
                <div class="testimonial-rating">
                    @for($i = 0; $i < $testimonial['rating']; $i++)
                        <span class="star">★</span>
                    @endfor
                </div>
                <p class="testimonial-content">"{{ $testimonial['content'] }}"</p>
                <div class="testimonial-author">
                    <div class="author-info">
                        <h4>{{ $testimonial['name'] }}</h4>
                        <p>{{ $testimonial['role'] }} at {{ $testimonial['company'] }}</p>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </section>
@endsection

