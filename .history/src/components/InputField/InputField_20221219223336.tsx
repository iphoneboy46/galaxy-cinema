import React from "react";
import "./InputField.scss";

interface InputFieldProps {
  field: {
    name:string;
    value:string;
    onChange: () => void;
    onBlur: () => void;
  };
  form: {
    errors: any,
    touched: string,
  };
  label: string;
  placeholder: string;
  disabled: boolean;
  type: any;
}

function InputField(props: InputFieldProps) {


  const { field, form, type, label, placeholder, disabled } = props;

  const {errors, touched} = form;


  const { name, value, onChange, onBlur } = field;

  const showError = errors[name] && touched[name];

  return (
    <div className="input-field">
      <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} disabled={disabled} />


    </div>
  );
}

export default InputField;
