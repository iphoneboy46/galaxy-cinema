import React from 'react'
import "./InputField.scss"

interface InputFieldProps{
    props: {}[]
}

function InputField(props:InputFieldProps) {

    console.log(props);


  return (
    <div className="input-field">
         <input id="email" name="email" type="email" placeholder="Email" />
    </div>
  )
}

export default InputField