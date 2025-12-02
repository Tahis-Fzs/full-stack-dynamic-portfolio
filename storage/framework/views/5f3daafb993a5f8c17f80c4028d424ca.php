

<?php $__env->startSection('title', 'Experiences Management'); ?>

<?php $__env->startPush('styles'); ?>
<style>
    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
        border-radius: 12px;
        border: 1px solid #333;
    }
    
    .page-header h2 {
        margin: 0;
        color: #fff;
    }
    
    .empty-state {
        text-align: center;
        padding: 3rem;
        color: #aaa;
    }
    
    .empty-state a {
        color: #00ff88;
        text-decoration: none;
    }
</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
<div style="padding: 2rem;">
    <div class="page-header">
        <h2>💼 Experiences Management</h2>
        <a href="<?php echo e(route('admin.experiences.create')); ?>" class="btn btn-primary">➕ Add New Experience</a>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Icon</th>
                <th>Title</th>
                <th>Description</th>
                <th>Order</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php $__empty_1 = true; $__currentLoopData = $experiences; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $experience): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr>
                    <td style="font-size: 1.5rem;"><?php echo e($experience->icon ?? '⭐'); ?></td>
                    <td style="color: #fff; font-weight: 500;"><?php echo e($experience->title); ?></td>
                    <td><?php echo e(\Illuminate\Support\Str::limit($experience->description, 50)); ?></td>
                    <td><?php echo e($experience->order); ?></td>
                    <td>
                        <a href="<?php echo e(route('admin.experiences.edit', $experience)); ?>" class="btn btn-primary" style="margin-right: 0.5rem;">Edit</a>
                        <form action="<?php echo e(route('admin.experiences.destroy', $experience)); ?>" method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this experience?')">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('DELETE'); ?>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr>
                    <td colspan="5" class="empty-state">
                        No experiences found. <a href="<?php echo e(route('admin.experiences.create')); ?>">Create your first experience</a>
                    </td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\md-julfikar-hasan-v2\resources\views/admin/experiences/index.blade.php ENDPATH**/ ?>