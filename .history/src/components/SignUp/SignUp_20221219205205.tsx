import React from "react";
import Select from "react-select";
import "./SignUp.scss";

const gender = [
  {
    label: "Chọn giới tính",
    value: "",
  },
  {
    label: "Nam",
    value: "Nam",
  },
  {
    label: "Nữ",
    value: "Nữ",
  },
];

function SignUp() {
  return (
    <Formik initialValues={initialValues} onSubmit={(values, actions) => {
      
    }}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <div className="sign-up">
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
              <Link to="/">Quên mật khẩu?</Link>
              <button>ĐĂNG NHẬP</button>
            </Form>
          </div>
        );
      }}
    </Formik>
    <div className="sign-up">
      <input placeholder="Họ tên" type="text" />
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
      <h4>
      Tôi đã đọc và đồng ý với <span>CHÍNH SÁCH</span> của chương trình. 
      </h4>
      <button>ĐĂNG KÝ</button>
    </div>
  );
}

export default SignUp;
