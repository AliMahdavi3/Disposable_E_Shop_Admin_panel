import swal from 'sweetalert';

export const Alert = (title, text, icon) => {
    return new Promise((resolve) => {
        swal({
            title,
            text,
            icon,
            button: "متوجه شدم",
        }).then(() => {
            resolve();
        });
    });
};

export const Confirm = (title, text) => {
    return swal({
        title,
        text,
        icon: "warning",
        buttons: ["خیر", "بله"],
        dangerMode: true,
    });
}