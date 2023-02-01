import React from "react";
import "./InputField.scss";

interface InputFieldProps {
  field: {
    name:string;
    value:string;
  };
  form: {};
  label: string;
  placeholder: string;
  disabled: boolean;
  type: any;
}

function InputField(props: InputFieldProps) {
  console.log(props);

  const { field, form, type, label, placeholder, disabled } = props;

  const { name, value, onChange, onBlur } = field;

  return (
    <div className="input-field">
      <input id="email" name="email" type="email" placeholder="Email" />
    </div>
  );
}

export default InputField;