import React from "react";
const Input = ({ error, name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alter-danger">{error}</div>}
    </div>
  );
};

export default Input;
