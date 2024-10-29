import * as Yup from 'yup';
import { Alert } from '../../../utils/alert';
import { createNewQuestionService, editQuestionService } from '../../../services/question';


export const initialValues = {
    title: '',
    content: '',
};

export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        if (editId) {
            const res = await editQuestionService(editId, values);
            console.log(res);
            if (res.status === 200) {
                Alert('سوال ویرایش شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await createNewQuestionService(values);
            console.log(res);
            if (res.status === 201) {
                Alert('سوال ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
    title: Yup.string().required('موضوع سوال الزامی است'),
    content: Yup.string().required('پاسخ سوال الزامی است'),
});