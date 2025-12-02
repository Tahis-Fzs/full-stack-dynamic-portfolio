

<?php $__env->startSection('title', 'Projects Management'); ?>

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
    
    .empty-state a:hover {
        text-decoration: underline;
    }
</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
<div style="padding: 2rem;">
    <div class="page-header">
        <h2>📁 Projects Management</h2>
        <a href="<?php echo e(route('admin.projects.create')); ?>" class="btn btn-primary">➕ Add New Project</a>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Featured</th>
                <th>Active</th>
                <th>Order</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php $__empty_1 = true; $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr>
                    <td style="color: #fff; font-weight: 500;"><?php echo e($project->title); ?></td>
                    <td><?php echo e($project->category ?? '-'); ?></td>
                    <td>
                        <?php if($project->is_featured): ?>
                            <span style="color: #00ff88;">✓ Yes</span>
                        <?php else: ?>
                            <span style="color: #888;">No</span>
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if($project->is_active): ?>
                            <span style="color: #00ff88;">✓ Yes</span>
                        <?php else: ?>
                            <span style="color: #888;">No</span>
                        <?php endif; ?>
                    </td>
                    <td><?php echo e($project->order); ?></td>
                    <td>
                        <a href="<?php echo e(route('admin.projects.edit', $project)); ?>" class="btn btn-primary" style="margin-right: 0.5rem;">Edit</a>
                        <form action="<?php echo e(route('admin.projects.destroy', $project)); ?>" method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this project?')">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('DELETE'); ?>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr>
                    <td colspan="6" class="empty-state">
                        No projects found. <a href="<?php echo e(route('admin.projects.create')); ?>">Create your first project</a>
                    </td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\md-julfikar-hasan-v2\resources\views/admin/projects/index.blade.php ENDPATH**/ ?>