import * as Yup from 'yup';
import { createNewArticleService, editArticleService } from '../../../services/article';
import { Alert } from '../../../utils/alert';


export const initialValues = {
    title: '',
    content: '',
    excerpt: '',
    image: '',
    authorName: '',
    authorBio: '',
    authorProfileImage: '',
    readTime: '',
    categories: '',
};

export const onSubmit = async (values, actions, setForceRender, editId) => {
    try {
        console.log("Submitting values:", values); // Log the values being submitted
        if (editId) {
            const res = await editArticleService(editId, values);
            console.log(res);
            if (res.status === 200) {
                Alert('مقاله ویرایش شد', 'عملیات موفقیت آمیز بود!', 'success');
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        } else {
            const res = await createNewArticleService(values);
            console.log(res);
            if (res.status === 201) {
                Alert('مقاله ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
                actions.resetForm();
                setForceRender(last => last + 1);
            }
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
    title: Yup.string().required('موضوع مقاله الزامی است'),
    content: Yup.string().required('محتوا الزامی است'),
    excerpt: Yup.string().required('خلاصه مقاله الزامی است'),
    image: Yup.string().min(1, 'حداقل یک تصویر بارگذاری کنید!'),
    authorName: Yup.string().required('نام نویسنده الزامی است'),
    authorBio: Yup.string().required('بیوگرافی الزامی است'),
    authorProfileImage: Yup.string().min(1, 'حداقل یک تصویر بارگذاری کنید!'),
    readTime: Yup.string().required('زمان مطالعه الزامی است'),
    categories: Yup.string().required('دسته بندی ها الزامی است'),
});

export const ArticleCategories = [
    { id: 0, value: 'ظروف یکبارمصرف' },
    { id: 1, value: 'تم تولدی' },
    { id: 2, value: 'ظروف آلمینیومی' },
    { id: 3, value: 'بادکنک' },
    { id: 4, value: 'کاسه' },
    { id: 5, value: 'کلاه تولد' },
    { id: 6, value: 'لیوان کاغذی' },
    { id: 7, value: 'سوت تولدی' },
    { id: 8, value: 'دیس پلاستیکی' },
    { id: 9, value: 'لیوان' },
];

export const readingTime = [
    { id: 0, value: '1 دقیقه' },
    { id: 1, value: '2 دقیقه' },
    { id: 2, value: '3 دقیقه' },
    { id: 3, value: '4 دقیقه' },
    { id: 4, value: '5 دقیقه' },
    { id: 5, value: '6 دقیقه' },
    { id: 6, value: '7 دقیقه' },
    { id: 7, value: '8 دقیقه' },
    { id: 8, value: '9 دقیقه' },
    { id: 9, value: '10 دقیقه' },
]