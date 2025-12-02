

<?php $__env->startSection('title', 'Works - Md Julfikar Hasan'); ?>

<?php $__env->startPush('styles'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/works.css')); ?>">
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
    <section class="works-section">
        <h1>My Works</h1>
        <div class="works-grid">
            <?php $__empty_1 = true; $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <div class="work-item">
                    <div class="work-image">
                        <?php if($project->image): ?>
                            <img src="<?php echo e(asset('storage/' . $project->image)); ?>" alt="<?php echo e($project->title); ?>" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                        <?php else: ?>
                            <div class="project-mockup mobile-app"></div>
                        <?php endif; ?>
                    </div>
                    <h3><?php echo e($project->icon ?? '📱'); ?> <?php echo e($project->title); ?></h3>
                    <p><?php echo e($project->description); ?></p>
                    <?php if($project->tech_tags && is_array($project->tech_tags)): ?>
                        <div class="work-tech">
                            <?php $__currentLoopData = $project->tech_tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <span class="tech-tag"><?php echo e($tag); ?></span>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                    <?php endif; ?>
                    <?php if($project->project_url): ?>
                        <a href="<?php echo e($project->project_url); ?>" target="_blank" class="project-link">View Project →</a>
                    <?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <div class="work-item">
                    <div class="work-image">
                        <div class="project-mockup mobile-app"></div>
                    </div>
                    <h3>📱 StudentMove – Smart Transportation App</h3>
                    <p>A complete mobile solution for students to book and track transportation in real time. Designed seamless onboarding, booking flows, and route-tracking interfaces with a focus on simplicity and usability.</p>
                    <div class="work-tech">
                        <span class="tech-tag">Figma</span>
                        <span class="tech-tag">Mobile UI</span>
                        <span class="tech-tag">UX Design</span>
                    </div>
                </div>
                <div class="work-item">
                    <div class="work-image">
                        <div class="project-mockup dashboard"></div>
                    </div>
                    <h3>📊 ERP Dashboard UI</h3>
                    <p>An enterprise-grade dashboard design for business management systems. Built scalable components, data visualization layouts, and responsive design systems ready for developer handoff.</p>
                    <div class="work-tech">
                        <span class="tech-tag">Dashboard UI</span>
                        <span class="tech-tag">Design System</span>
                        <span class="tech-tag">Data Viz</span>
                    </div>
                </div>
                <div class="work-item">
                    <div class="work-image">
                        <div class="project-mockup landing"></div>
                    </div>
                    <h3>💼 Finance & Consulting Landing Pages</h3>
                    <p>Professional landing page templates created for ThemeForest, optimized for conversion and clean visual hierarchy with strong typography and color systems.</p>
                    <div class="work-tech">
                        <span class="tech-tag">Landing Page</span>
                        <span class="tech-tag">Typography</span>
                        <span class="tech-tag">Conversion</span>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('footer'); ?>
    <footer>
        <p>&copy; <?php echo e(date('Y')); ?> Md Julfikar Hasan. All rights reserved.</p>
    </footer>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
    <script src="<?php echo e(asset('js/works.js')); ?>"></script>
<?php $__env->stopPush(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\md-julfikar-hasan-v2\resources\views/pages/works.blade.php ENDPATH**/ ?>