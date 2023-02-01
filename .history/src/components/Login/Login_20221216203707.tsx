import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login-exits">
        </div>  
      <div className="login-tab">
        <div className="login-tab-signin">ĐĂNG NHẬP
        <span></span>
        </div>
        <div className="login-tab-cheo">/</div>
        <div className="login-tab-signup">ĐĂNG KÝ
        <span></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
