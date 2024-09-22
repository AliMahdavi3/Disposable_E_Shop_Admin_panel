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