import React from 'react'
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import File from './File';
import TicketInput from './TicketInput';

const FormikControl = (props) => {
  switch (props.control) {
    case 'input':
        return <Input {...props}/>
    case 'textarea':
        return <Textarea {...props}/>
    case 'select':
        return <Select {...props}/>
    case 'file':
        return <File {...props}/>
    case 'ticketInput':
        return <TicketInput {...props}/>
    default:
        return null;
  }
}

export default FormikControl
