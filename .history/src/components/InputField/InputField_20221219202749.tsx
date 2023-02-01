import React from 'react'
import "./InputField.scss"

function InputField() {
  return (
    <div className="input-field">
         <input id="email" name="email" type="email" placeholder="Email" />
    </div>
  )
}

export default InputField