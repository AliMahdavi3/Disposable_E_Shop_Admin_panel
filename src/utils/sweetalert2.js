import Swal from 'sweetalert2'

export const Alert = async (title, text, icon) => {
    try {
        return await Swal.fire({
            title: title || 'توجه !',
            text: text || "",
            icon: icon || 'info',
            confirmButtonText: "متوجه شدم",
            customClass: {
                confirmButton: 'swal2-confirm-button',
            },
        });
    } catch (error) {
        throw new Error('Failed to display alert');
    }
};

export const Confirm = async (title, text, icon) => {
    try {
        return await Swal.fire({
            title: title || 'آیا مطمئن هستید؟',
            text: text || '',
            icon: icon || 'question',
            confirmButtonText: "بله",
            cancelButtonText: "خیر",
            showCancelButton: true,
            customClass: {
                confirmButton: 'swal2-confirm-button',
                cancelButton: 'swal2-cancel-button',
            },
        });
    } catch (error) {
        throw new Error('Failed to display confirmation dialog');
    }
};

export const Toast = (title, icon, timer = 3000) => {
    try {
        const ToastInstance = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: true,
            customClass: {
                popup: 'custom-toast',
            },
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
        });

        ToastInstance.fire({
            title: title || '',
            icon: icon || 'info',
        });
    } catch (error) {
        throw new Error('Failed to display toast notification');
    }
};