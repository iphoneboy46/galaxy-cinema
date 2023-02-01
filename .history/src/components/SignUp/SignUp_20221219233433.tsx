import React from "react";
import Select from "react-select";
import "./SignUp.scss";
import { Formik, Form, FastField } from "formik";
import InputField from "../InputField/InputField";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/FireBase";

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

interface SignUpProps {
  number: React.Dispatch<React.SetStateAction<number>>;
}

function SignUp({ number }: SignUpProps) {
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
    repassword: Yup.string().required("Vui lòng nhập xác nhận mật khẩu"),
    name: Yup.string().required("Vui lòng nhập Họ tên"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const email = values.email;
        const password = values.password;
        const repassword = values.repassword;
        const displayName = values.name;

        const signUpSuccess = document.querySelector(
          ".sign-up-success"
        ) as HTMLDivElement;

        const auth = getAuth(app);

        if (password === repassword) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              updateProfile(user, {
                displayName: displayName,
              });
              console.log(user);
              signUpSuccess.style.animation = "success 3s ease-in-out";
             
              number(1);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
              // ..
            });
        } else {
          alert("Password does not match");
        }
      }}
    >
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
              <button type="submit">ĐĂNG KÝ</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignUp;
