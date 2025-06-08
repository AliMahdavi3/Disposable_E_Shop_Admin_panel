import * as Yup from 'yup';
import { createNewSlideService, editSlideService } from '../../../services/main-slider';
import { Alert } from '../../../utils/sweetalert2';


export const initialValues = {
    title: '',
    content: '',
    image: '',
};

export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        console.log("Submitting values:", values); // Log the values being submitted
        if (editId) {
            const res = await editSlideService(editId, values);
            console.log(res);
            if (res.status === 200) {
                Alert('اسلاید ویرایش شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await createNewSlideService(values);
            console.log(res);
            if (res.status === 201) {
                Alert('اسلاید ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
    title: Yup.string().required('عنوان اسلاید الزامی است'),
    content: Yup.string().required('محتوا الزامی است'),
    image: Yup.string().min(1, 'حداقل یک تصویر بارگذاری کنید!'),
});
