import React from 'react'
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import File from './File';
import TicketInput from './TicketInput';
import Date from './Date';
import Password from './Password';

const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'password':
            return <Password {...props} />
        case 'textarea':
            return <Textarea {...props} />
        case 'select':
            return <Select {...props} />
        case 'date':
            return <Date {...props} />
        case 'file':
            return <File {...props} />
        case 'ticketInput':
            return <TicketInput {...props} />
        default:
            return null;
    }
}

export default FormikControl
