import React from 'react'
import Select from 'react-select'

const gender = [
    {
        label: '',
        value: ''
    },
    {
        label: '',
        value: ''
    }
]
    


function SignUp() {
  return (
    <div className="sign-up">
        <input placeholder="Họ tên" type="text" />
        <div className="sigun-up-name-phone">
            <input type="text" />
            <Select options={}></Select>
        </div>
    </div>
  )
}

export default SignUp