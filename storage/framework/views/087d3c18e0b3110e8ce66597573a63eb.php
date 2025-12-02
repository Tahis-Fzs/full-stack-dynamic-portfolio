

<?php $__env->startSection('title', 'Contact Messages'); ?>

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
    
    .unread-badge {
        background: #00ff88;
        color: #000;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-left: 0.5rem;
    }
    
    .read-badge {
        background: #333;
        color: #aaa;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.75rem;
    }
    
    .empty-state {
        text-align: center;
        padding: 3rem;
        color: #aaa;
    }
</style>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
<div style="padding: 2rem;">
    <div class="page-header">
        <h2>✉️ Contact Messages
            <?php if($messages->where('is_read', false)->count() > 0): ?>
                <span class="unread-badge"><?php echo e($messages->where('is_read', false)->count()); ?> Unread</span>
            <?php endif; ?>
        </h2>
    </div>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php $__empty_1 = true; $__currentLoopData = $messages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr style="<?php echo e(!$message->is_read ? 'background: rgba(0, 255, 136, 0.05);' : ''); ?>">
                    <td style="color: #fff; font-weight: 500;"><?php echo e($message->name); ?></td>
                    <td><?php echo e($message->email); ?></td>
                    <td><?php echo e(\Illuminate\Support\Str::limit($message->message, 50)); ?></td>
                    <td><?php echo e($message->created_at->format('Y-m-d H:i')); ?></td>
                    <td>
                        <?php if($message->is_read): ?>
                            <span class="read-badge">Read</span>
                        <?php else: ?>
                            <span class="unread-badge">Unread</span>
                        <?php endif; ?>
                    </td>
                    <td>
                        <a href="<?php echo e(route('admin.messages.show', $message)); ?>" class="btn btn-primary" style="margin-right: 0.5rem;">View</a>
                        <form action="<?php echo e(route('admin.messages.destroy', $message)); ?>" method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this message?')">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('DELETE'); ?>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr>
                    <td colspan="6" class="empty-state">
                        No messages found. Messages from the contact form will appear here.
                    </td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\md-julfikar-hasan-v2\resources\views/admin/messages/index.blade.php ENDPATH**/ ?>