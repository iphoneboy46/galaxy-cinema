import React from "react";
import "./Login.scss";

function Login() {
  const handleExit = () => {};

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
