import * as Yup from 'yup';
import { respondToTicketService } from '../../../services/ticket';
import { Alert } from '../../../utils/sweetalert2';


export const initialValues = {
    responseMessage: '',
};

export const onSubmit = async (values, actions, setForceRender, ticketId, setTicket) => {
    try {
        const res = await respondToTicketService(ticketId, values);
        if (res.status === 200) {
            Alert('موفقیت!', 'پاسخ شما با موفقیت ثبت شد.', 'success');
            setTicket(res.data.ticket);
            actions.resetForm();
            setForceRender(last => last + 1);
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const validationSchema = Yup.object({
    responseMessage: Yup.string().required("لطفا این قسمت را پر کنید"),
});