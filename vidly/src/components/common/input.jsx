import React from "react";
const Input = ({ error, name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alter-danger">{error}</div>}
    </div>
  );
};

export default Input;
