import React from "react";
import Select from "react-select";
import "./SignUp.scss";
import { Formik, Form, FastField } from "formik";
import InputField from "../InputField/InputField";
import { Link } from "react-router-dom";

// const gender = [
//   {
//     label: "Chọn giới tính",
//     value: "",
//   },
//   {
//     label: "Nam",
//     value: "Nam",
//   },
//   {
//     label: "Nữ",
//     value: "Nữ",
//   },
// ];

interface MyFormValues {
  email: string;
  password: string;
  name: string;
  repassword: string;
}

function SignUp() {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
    name: "",
    repassword: "",
  };


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Vui lòng nhập địa chỉ email của bạn!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  });

  return (
    <Formik

     initialValues={initialValues}
     onSubmit={(values, actions) => {



    }}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <div className="sign-up">
            <Form>
              <FastField
                name="name"
                component={InputField}
                label="name"
                placeholder="Họ tên"
                type="text"
              />

              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Email"
                type="email"
              />

              <FastField
                name="password"
                component={InputField}
                label="password"
                placeholder="Mật Khẩu"
                type="password"
              />

              <FastField
                name="repassword"
                component={InputField}
                label="repassword"
                placeholder="Xác nhận Mật Khẩu"
                type="password"
              />
         
              <h4>
                Tôi đã đọc và đồng ý với <span>CHÍNH SÁCH</span> của chương
                trình.
              </h4>
              <button>ĐĂNG KÝ</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignUp;
