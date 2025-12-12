@extends('layouts.app')

@section('title', 'Projects')

@section('content')

<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">Projects</h1>
        <a href="" class="btn btn-primary">New Project</a>
    </div>
    <div class="mb-4">
        <form method="POST" action="{{ url('/projects/store') }}">
            @csrf

            <div class="row g-3">
                <div class="col-md-6">
                    <label for="title" class="form-label">Project Name</label>
                    <input
                        type="text"
                        id="title"
                        name="project_name"
                        class="form-control"
                        value=""
                        required
                    >
                </div>

                <div class="col-md-6">
                    <label for="tool_name" class="form-label">Tool Name</label>
                    <input
                        type="text"
                        id="tool_name"
                        name="tool"
                        class="form-control"
                        value=""
                    >
                </div>
            </div>

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">Create Project</button>
            </div>
        </form>
    </div>

    @if(isset($projects))
        <div class="row g-3">
            @foreach($projects as $project)
                <div class="col-sm-6 col-lg-4">
                    <div class="card h-100">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title mb-1">{{ $project->name }}</h5>
                            <p class="card-text text-muted mb-2">{{ $project->tool }}</p>
                        </div>
                    </div>
                </div>
                <hr>
            @endforeach
        </div>
    @else
        <div class="alert alert-info">
            No projects found. <a href="">Create your first project</a>.
        </div>
    @endif
</div>
@endsection