import React, { useState } from "react";
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

  

  return (
    <div className="login">
      <div onClick={handleExit} className="login-exits">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="login-tab">
        <div className="login-tab-signin">
          ĐĂNG NHẬP
          <span></span>
        </div>
        <div className="login-tab-cheo">/</div>
        <div className="login-tab-signup">
          ĐĂNG KÝ
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Login;