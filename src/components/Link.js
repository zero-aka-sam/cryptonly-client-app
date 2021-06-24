import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Link = (props) => {
  const { to, className, style, children } = props;
  return (
    <ReactLink
      to={to}
      className={className}
      style={style}
      onClick={props.onClick}
      {...props}
    >
      {children}
    </ReactLink>
  );
};

export default Link;
