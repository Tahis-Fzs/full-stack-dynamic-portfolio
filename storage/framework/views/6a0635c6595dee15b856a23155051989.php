<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title', 'Md Julfikar Hasan - Portfolio'); ?></title>
    <?php echo $__env->yieldPushContent('styles'); ?>
</head>
<body>
    <header>
        <div class="logo">
            <span class="logo-text">JULFIKAR</span>
            <span class="logo-dot"></span>
        </div>
        <nav>
            <ul>
                <li><a href="<?php echo e(route('home')); ?>" class="<?php echo e(request()->routeIs('home') ? 'active' : ''); ?>">Home</a></li>
                <li><a href="<?php echo e(route('about')); ?>" class="<?php echo e(request()->routeIs('about') ? 'active' : ''); ?>">About</a></li>
                <li><a href="<?php echo e(route('works')); ?>" class="<?php echo e(request()->routeIs('works') ? 'active' : ''); ?>">Works</a></li>
                <li><a href="<?php echo e(route('contact')); ?>" class="<?php echo e(request()->routeIs('contact') ? 'active' : ''); ?>">Contact</a></li>
            </ul>
        </nav>
        <?php
            $resumePath = isset($settings['resume_file']) ? (str_starts_with($settings['resume_file'], 'storage/') ? asset($settings['resume_file']) : asset('storage/' . $settings['resume_file'])) : asset('assets/Md_Julfikar_Hasan_CV.pdf');
        ?>
        <a href="<?php echo e($resumePath); ?>" class="resume-btn" download>My Resume</a>
    </header>

    <main>
        <?php echo $__env->yieldContent('content'); ?>
    </main>

    <?php if (! empty(trim($__env->yieldContent('footer')))): ?>
        <?php echo $__env->yieldContent('footer'); ?>
    <?php endif; ?>

    <?php echo $__env->yieldPushContent('scripts'); ?>
</body>
</html>
<?php /**PATH E:\md-julfikar-hasan-v2\resources\views/layouts/app.blade.php ENDPATH**/ ?>