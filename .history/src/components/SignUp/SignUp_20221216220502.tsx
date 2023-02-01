import React from 'react'
import Select from 'react-select'
import './SignUp.scss'

const gender = [
    {
        label: 'Chọn giới tính',
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
        <div className="sign-up-flex">
            <input placeholder="Số điện thoại" type="text" />
            <Select placeholder="Chọn giới tính" options={gender}></Select>
        </div>
        <input placeholder="Email" type="text" />
        <div className="sign-up-flex">
            <input placeholder="Mật khẩu" type="text" />
            <input placeholder="" type="text" />
        </div>
    </div>
  )
}

export default SignUp