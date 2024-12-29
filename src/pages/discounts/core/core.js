import * as Yup from 'yup';
import { Alert } from '../../../utils/alert';
import { createNewDiscountCodeService, editDiscountCodeService } from '../../../services/discount';


export const initialValues = {
    code: '',
    percentage: '',
    isActive: '',
    expiresAt: '',
};


export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        values.isActive = values.isActive === 'فعال';

        if (editId) {
            const res = await editDiscountCodeService(editId, values);
            console.log(res);
            if (res.status === 200) {
                Alert('کد تخفیف ویرایش شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await createNewDiscountCodeService(values);
            console.log(res);
            if (res.status === 201) {
                Alert('کد تخفیف ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
    code: Yup.string().required('کد تخفیف الزامی است'),
    percentage: Yup.number().required('مقدار درصد الزامی است').positive('مقدار باید مثبت باشد'),
    isActive: Yup.string().required('وضعیت کد تخفیف الزامی است'), // Change validation to string
    // expiresAt: Yup.string().required('تاریخ الزامی است'),
});

export const isAvailable = [
    { id: 1, value: 'فعال' },
    { id: 2, value: 'غیرفعال' },
];