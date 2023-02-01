import React from 'react'
import Select from 'react-select'

function SignUp() {
  return (
    <div className="sign-up">
        <input placeholder="Họ tên" type="text" />
        <div className="sigun-up-name-phone">
            <input type="text" />
            <Select></Select>

        </div>
    </div>
  )
}

export default SignUp