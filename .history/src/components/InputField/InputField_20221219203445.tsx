import React from 'react'
import "./InputField.scss"

interface InputFieldProps{
    props: {}[]
}

function InputField(props:InputFieldProps) {

    const {
        field,form,
        type, label,placeholder,disabled,
    } = props


  return (
    <div className="input-field">
         <input id="email" name="email" type="email" placeholder="Email" />
    </div>
  )
}

export default InputField