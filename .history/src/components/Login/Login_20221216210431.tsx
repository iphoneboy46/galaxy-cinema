import React from "react";
import "./Login.scss";

function Login() {
  const handleExit = () => {
    const loginForm = document.querySelector(".login-form") as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    loginForm.style.visibility = "visible";
    loginForm.style.top = "50%";
    modal.style.display = "block";
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
