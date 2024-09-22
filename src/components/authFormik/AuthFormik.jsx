import React from 'react'
import Input from './Input';
import Radio from './Radio';

const AuthFormik = (props) => {
  switch (props.control) {
    case 'input':
        return <Input {...props}/>
    case 'radio':
        return <Radio {...props}/>
    default:
        return null;
  }
}

export default AuthFormik
