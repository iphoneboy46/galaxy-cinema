import React from 'react'
import "./InputField.scss"

interface InputFieldProps{
    field: {}
    form:any
    label:string
    placeholder:string
    disabled:boolean
    type: any
}

function InputField(props:InputFieldProps) {
    console.log(props);


    const {
        field,form,
        type, label,placeholder,disabled
    } = props



  return (
    <div className="input-field">
         <input id="email" name="email" type="email" placeholder="Email" />
    </div>
  )
}

export default InputField