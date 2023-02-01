import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Login.scss";

function Login() {

 const [active, setActive] = useState<number>(1)


  const handleExit = () => {
    const loginForm = document.querySelector(".login-form") as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    loginForm.style.visibility = "hidden";
    loginForm.style.top = "-100%";
    modal.style.display = "none";
  };

  const handleActive = (number: number) => {
        setActive(number);
  }

  console.log(active);

  return (
    <div className="login">
      <div onClick={handleExit} className="login-exits">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="login-tab">
        <div className={active === 1 ?"login-tab-signin active" : "login-tab-signin"} onClick={()=>{
            handleActive(1)
        }}>
          ĐĂNG NHẬP
          <span></span>
        </div>
        <div className="login-tab-cheo">/</div>
        <div className={active === 2 ?"login-tab-signup active" : "login-tab-signup"} onClick={()=>{
            handleActive(2)
        }}>
          ĐĂNG KÝ
          <span></span>
        </div>
      </div>
      {
        active === 1 ? <SignIn /> : ""
      }

      {
        active === 2 ? <SignUp number={setActive} /> : ""
      }
      <div className="sign-in-success"><i className="fa-solid fa-circle-check"></i> Đăng nhập thành công</div>
      <div className="sign-up-success">Đăng ký thành công</div>

    </div>
  );
}

export default Login;
