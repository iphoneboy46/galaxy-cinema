import React from "react";
import Select from "react-select";
import "./SignUp.scss";

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

  const initialValues:MyFormValues = { email="", password="", name="",repass=""};

  return (
    <Formik initialValues={initialValues} onSubmit={(values, actions) => {
      
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
              <Link to="/">Quên mật khẩu?</Link>
              <h4>
      Tôi đã đọc và đồng ý với <span>CHÍNH SÁCH</span> của chương trình. 
      </h4>
      <button>ĐĂNG KÝ</button>
            </Form>
          </div>
        );
      }}
    </Formik>
    <div className="sign-up">
      <input placeholder="" type="text" />
      <div className="sign-up-flex">
        <input placeholder="Số điện thoại" type="text" />
        <Select placeholder="Chọn giới tính" options={gender}></Select>
      </div>
      <input placeholder="Email" type="text" />
      <div className="sign-up-flex">
        <input placeholder="Mật khẩu" type="password" />
        <input placeholder="Xác nhận mật khẩu" type="password" />
      </div>
      <input type="date" />
     
    </div>
  );
}

export default SignUp;
