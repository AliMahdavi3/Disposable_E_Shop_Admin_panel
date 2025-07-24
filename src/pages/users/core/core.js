import * as Yup from 'yup';
import { Alert } from '../../../utils/sweetalert2';
import { registerService, updateUserInfoService } from '../../../services/user';


export const initialValues = {
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    zipCode: "",
    role: "",
    birthDate: "",
    password: "",
    confirm_password: "",
};

export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        if (editId) {
            const res = await updateUserInfoService(editId, values);
            if (res.status === 200) {
                Alert('اطلاعات کاربر ویرایش شد!', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await registerService(values);
            if (res.status === 201) {
                Alert('کاربر ثبت شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        if (error.response && error.response.data.message === 'User with this email already exists!') {
            await Alert('خطا!', 'کاربری با این ایمیل قبلا ثبت شده', 'error');
        } else if (error.response && error.response.data.message === 'User with this phone number already exists!') {
            await Alert('خطا!', 'کاربری با این شماره تلفن قبلا ثبت شده', 'error');
        } else {
            await Alert('خطا!', error.message, 'error');
        }
    }
};


export const validationSchema = Yup.object({
    name: Yup.string().required("لطفا این قسمت را پر کنید"),
    email: Yup.string().required("لطفا این قسمت را پر کنید")
        .email("لطفا قالب ایمیل را رعایت کنید : aaa@example.bbb"),
    phone: Yup.string().required("لطفا این قسمت را پر کنید"),
    role: Yup.string().required("لطفا این قسمت را پر کنید"),
    city: Yup.string().required('لطفا شهر خود را وارد کنید'),
    address: Yup.string().required('لطفا آدرس خود را وارد کنید'),
    zipCode: Yup.string().required('لطفا کد پستی خود را وارد کنید'),
    birthDate: Yup.string().required('لطفا تاریخ تولد خود را وارد کنید!'),
});

export const userRole = [
    { id: 1, value: 'Admin' },
    { id: 2, value: 'User' },
];