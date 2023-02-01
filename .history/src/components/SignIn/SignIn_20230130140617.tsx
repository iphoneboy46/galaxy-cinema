import React, { useContext } from "react";
import "./SignIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FastField } from "formik";
import InputField from "../InputField/InputField";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { UserContext } from "../UserContext/UserContext";
import app from "../firebase/FireBase";
import { MovieContext } from "../MovieContext/MovieContext";

interface MyFormValues {
  email: string;
  password: string;
}

function SignIn() {
  const initialValues: MyFormValues = { email: "", password: "" };

  const userContext = useContext(UserContext);
  const movieContext = useContext(MovieContext);
  const navigate = useNavigate();


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Vui lòng nhập địa chỉ email của bạn!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}

      onSubmit={(values) => {
        const email = values.email;
        const password = values.password;
        const auth = getAuth(app);
        const alertLoi = document.querySelector(".alert-signIn") as HTMLDivElement;
        

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.getIdToken);
            userContext.setAccount(user);
            console.log(userContext.account);
            alertLoi.style.display = "none";
            const loginForm = document.querySelector(".login-form") as HTMLDivElement;
            const modal = document.querySelector(".modal") as HTMLDivElement;
            loginForm.style.visibility = "hidden";
            loginForm.style.top = "-100%";
            modal.style.display = "none";
            if(movieContext?.name){
              navigate(`/book-ticket/${movieContext?.name}`);
            }
            
          })
          .catch((error) => {
            
            alertLoi.style.display = "block";
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        

        return (
          <div className="sign-in">
            <Form>
              <h5>
                Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội
                nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.
              </h5>
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

              <div className="alert-signIn">
                Tên đăng nhập hoặc mật khẩu không đúng !!!
              </div>
              <Link to="/">Quên mật khẩu?</Link>
              <button type="submit">ĐĂNG NHẬP</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignIn;
