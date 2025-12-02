

<?php $__env->startSection('title', 'Md Julfikar Hasan - Portfolio'); ?>

<?php $__env->startPush('styles'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/home.css')); ?>">
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- Top Row -->
        <div class="grid-row">
            <a href="<?php echo e(route('about')); ?>" class="profile-card large-card card-link">
                <div class="profile-content">
                    <div class="profile-image">
                        <img src="<?php echo e(asset('assets/images/profile.jpg')); ?>" alt="Md Julfikar Hasan">
                    </div>
                    <div class="profile-info">
                        <span class="role"><?php echo e($settings['role'] ?? 'UI/UX DESIGNER'); ?></span>
                        <h1><?php echo e($settings['name'] ?? 'Md Julfikar Hasan'); ?></h1>
                        <p><?php echo e($settings['bio'] ?? 'UI/UX Designer • Frontend Developer • Creative Problem Solver'); ?></p>
                        <div class="more-icon">→</div>
                    </div>
                </div>
            </a>
            
            <div class="projects-banner">
                <?php $__empty_1 = true; $__currentLoopData = $featuredProjects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                    <span><?php echo e($project->title); ?></span><?php if(!$loop->last): ?> • <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                    <span>StudentMove App</span> • <span>ERP Dashboard UI</span> • <span>Finance Landing Pages</span>
                <?php endif; ?>
            </div>
        </div>

        <!-- Middle Row -->
        <div class="grid-row">
            <a href="<?php echo e(route('works')); ?>" class="card showcase-card card-link">
                <div class="card-content">
                    <div class="showcase-image">
                        <div class="device-mockup">
                            <div class="device phone"></div>
                            <div class="device phone"></div>
                            <div class="device laptop"></div>
                        </div>
                    </div>
                    <span class="card-label">SHOWCASE</span>
                    <h3>Projects</h3>
                    <div class="more-icon">→</div>
                </div>
            </a>
        </div>

        <!-- Bottom Row -->
        <div class="grid-row">
            <div class="stats-card">
                <div class="stat-item">
                    <span class="stat-number"><?php echo e($settings['experience_years'] ?? '1.5'); ?></span>
                    <span class="stat-label">YEARS EXPERIENCE</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number"><?php echo e($settings['clients_count'] ?? '5'); ?></span>
                    <span class="stat-label">CLIENTS WORLDWIDE</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number"><?php echo e($settings['projects_count'] ?? '12+'); ?></span>
                    <span class="stat-label">TOTAL PROJECTS</span>
                </div>
            </div>
            
            <a href="<?php echo e(route('contact')); ?>" class="card work-together-card card-link">
                <div class="card-content">
                    <div class="star-icon">★</div>
                    <h2>Let's work <span class="highlight">together.</span></h2>
                    <div class="more-icon">→</div>
                </div>
            </a>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
    <script src="<?php echo e(asset('js/home.js')); ?>"></script>
<?php $__env->stopPush(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\md-julfikar-hasan-v2\resources\views/pages/home.blade.php ENDPATH**/ ?>