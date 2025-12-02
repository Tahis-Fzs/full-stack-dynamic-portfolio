

<?php $__env->startSection('title', 'Edit Project'); ?>

<?php $__env->startSection('content'); ?>
    <h2>Edit Project</h2>
    
    <form action="<?php echo e(route('admin.projects.update', $project)); ?>" method="POST" enctype="multipart/form-data" style="max-width: 800px;">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>
        <div>
            <label>Title *</label>
            <input type="text" name="title" value="<?php echo e(old('title', $project->title)); ?>" required>
        </div>
        <div>
            <label>Description *</label>
            <textarea name="description" rows="5" required><?php echo e(old('description', $project->description)); ?></textarea>
        </div>
        <div>
            <label>Current Image</label>
            <?php if($project->image): ?>
                <img src="<?php echo e(asset('storage/' . $project->image)); ?>" alt="<?php echo e($project->title); ?>" style="max-width: 200px; display: block; margin: 0.5rem 0;">
            <?php else: ?>
                <p>No image</p>
            <?php endif; ?>
            <input type="file" name="image" accept="image/*">
        </div>
        <div>
            <label>Tech Tags (comma separated)</label>
            <input type="text" name="tech_tags" value="<?php echo e(old('tech_tags', is_array($project->tech_tags) ? implode(', ', $project->tech_tags) : '')); ?>" placeholder="Figma, Mobile UI, UX Design">
        </div>
        <div>
            <label>Category</label>
            <input type="text" name="category" value="<?php echo e(old('category', $project->category)); ?>">
        </div>
        <div>
            <label>Project URL</label>
            <input type="url" name="project_url" value="<?php echo e(old('project_url', $project->project_url)); ?>">
        </div>
        <div>
            <label>Order</label>
            <input type="number" name="order" value="<?php echo e(old('order', $project->order)); ?>">
        </div>
        <div>
            <label>
                <input type="checkbox" name="is_featured" value="1" <?php echo e(old('is_featured', $project->is_featured) ? 'checked' : ''); ?>>
                Featured
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="is_active" value="1" <?php echo e(old('is_active', $project->is_active) ? 'checked' : ''); ?>>
                Active
            </label>
        </div>
        <div>
            <button type="submit" class="btn btn-primary">Update Project</button>
            <a href="<?php echo e(route('admin.projects.index')); ?>" class="btn">Cancel</a>
        </div>
    </form>
<?php $__env->stopSection(); ?>



<?php echo $__env->make('admin.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\md-julfikar-hasan-v2\resources\views/admin/projects/edit.blade.php ENDPATH**/ ?>