import * as Yup from 'yup';
import { createNewProductService, editProductService } from '../../../services/product';
import { Alert } from '../../../utils/alert';


export const initialValues = {
    title: '',
    content: '',
    image: [],
    price: '',
    productCode: '',
    weight: '',
    size: '',
    available: '',
    category: '',
    color: '',
    tag: '',
    rating: '',
};

export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        values.available = values.available === 'موجود هست';

        if (editId) {
            const res = await editProductService(editId, values);
            console.log(res);
            if (res.status === 200) {
                Alert('محصول ویرایش شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await createNewProductService(values);
            console.log(res);
            if (res.status === 201) {
                Alert('محصول ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
    title: Yup.string().required('نام محصول الزامی است'),
    content: Yup.string().required('محتوا الزامی است'),
    image: Yup.array().min(1, 'حداقل یک تصویر بارگذاری کنید!'),
    price: Yup.number().required('قیمت الزامی است').positive('قیمت باید مثبت باشد'),
    productCode: Yup.string().required('کد محصول الزامی است'),
    weight: Yup.string().required('وزن الزامی است'),
    size: Yup.string().required('اندازه الزامی است'),
    available: Yup.string().required('وضعیت موجودی الزامی است'),
    category: Yup.string().required('دسته بندی الزامی است'),
    color: Yup.string().required('رنگ الزامی است'),
    tag: Yup.string().required('تگ الزامی است'),
    rating: Yup.number().required('امتیاز الزامی است'),
});

export const categories = [
    { id: 1, value: 'ظروف یکبارمصرف' },
    { id: 2, value: 'تم تولدی' },
    { id: 3, value: 'ظروف آلمینیومی' },
    { id: 4, value: 'بادکنک' },
    { id: 5, value: 'کلاه تولد' },
    { id: 6, value: 'لیوان کاغذی' },
    { id: 7, value: 'سوت تولدی' },
    { id: 8, value: 'دیس پلاستیکی' },
    { id: 9, value: 'لیوان' },
    { id: 10, value: 'کاسه' },
];
export const colors = [
    { id: 1, value: 'آبی' },
    { id: 2, value: 'سبز' },
    { id: 3, value: 'سفید' },
    { id: 4, value: 'قرمز' },
    { id: 5, value: 'زرد' },
];
export const tags = [
    { id: 1, value: 'بشقاب' },
    { id: 2, value: 'لیوان' },
    { id: 3, value: 'بادکنک' },
    { id: 4, value: 'قاشق' },
];

export const ratingValue = [
    { id: 1, value: 2.5 },
    { id: 2, value: 2.6 },
    { id: 3, value: 2.8 },
    { id: 4, value: 2.9 },
    { id: 5, value: 3 },
    { id: 6, value: 3.2 },
    { id: 7, value: 3.4 },
    { id: 8, value: 3.6 },
    { id: 9, value: 3.9 },
    { id: 10, value: 4 },
    { id: 11, value: 4.1 },
    { id: 12, value: 4.2 },
    { id: 13, value: 4.3 },
    { id: 14, value: 4.5 },
    { id: 15, value: 4.7 },
    { id: 16, value: 4.8 },
    { id: 17, value: 4.9 },
    { id: 18, value: 5 },
];

export const isAvailable = [
    { id: 1, value: 'موجود هست' },
    { id: 2, value: 'موجود نیست' },
];