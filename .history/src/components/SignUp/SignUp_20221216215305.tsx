import React from 'react'
import Select from 'react-select'
import './SignUp.scss'

const gender = [
    {
        label: '',
        value: ''
    },
    {
        label: 'Nam',
        value: 'Nam'
    },
    {
        label: 'Nữ',
        value: 'Nữ'
    }
]
    


function SignUp() {
  return (
    <div className="sign-up">
        <input placeholder="Họ tên" type="text" />
        <div className="sign-up-name-phone">
            <input placeholder="Số điện thoại" type="text" />
            <Select options={gender}></Select>
        </div>
    </div>
  )
}

export default SignUp