import React from "react";
import "./InputField.scss";

interface InputFieldProps {
  field: {
    name:string;
    value:string;
    onChange: () => void;
    onBlur: () => void;
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
      <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} disabled={disabled} />
    </div>
  );
}

export default InputField;
