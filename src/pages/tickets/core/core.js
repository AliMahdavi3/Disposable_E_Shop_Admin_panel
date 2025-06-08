import * as Yup from 'yup';
import { Alert } from '../../../utils/sweetalert2';
import { editTicketService, postNewTicketService } from '../../../services/ticket';

export const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
    image: [],
};

export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        if (editId) {
            const res = await editTicketService(editId, values);
            console.log(res);
            if (res.status === 200) {
                Alert('تیکت ویرایش شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await postNewTicketService(values);
            console.log(res);
            if (res.status === 201) {
                Alert('تیکت ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
   name: Yup.string().required("لطفا این قسمت را پر کنید"),
    email: Yup.string().required("لطفا این قسمت را پر کنید")
        .email("لطفا قالب ایمیل را رعایت کنید : aaa@example.bbb"),
    phone: Yup.string().required("لطفا این قسمت را پر کنید"),
    subject:Yup.string().required("لطفا این قسمت را پر کنید"),
    description:Yup.string().required("لطفا این قسمت را پر کنید"),
});