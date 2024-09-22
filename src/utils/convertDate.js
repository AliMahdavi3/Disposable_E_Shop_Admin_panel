import moment from "jalali-moment";

export const convertDateToJalali = (date) => {
    return moment(date).locale('fa').format('YYYY/MM/DD')
}
