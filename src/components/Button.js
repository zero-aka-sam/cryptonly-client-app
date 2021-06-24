import React from "react";

const Button = (props) => {
  const { onClick, disabled, className, style, children } = props;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
