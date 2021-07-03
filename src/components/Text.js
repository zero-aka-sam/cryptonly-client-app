import React from "react";
import { colorPallet } from "../styles/base/theme";

const Text = (props) => {
  const Styles = {
    primaryText: {
      fontWeight: "normal",
      fontSize: props.fontSize || "20px",
      lineHeight: "26px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: colorPallet.glow,
      fontFamily: "futura_md_bt",
      ...props.style,
    },
    secondaryText: {
      fontWeight: "normal",
      fontSize: props.fontSize || "14px",
      lineHeight: "18px",
      letterSpacing: "0.07em",
      textAlign: "center",
      color: colorPallet.secondaryText,
      fontFamily: "futura_bk_ft",
      ...props.style,
    },
  };
  return (
    <p
      style={
        props.variant === "primary" ? Styles.primaryText : Styles.secondaryText
      }
    >
      {props.children}
    </p>
  );
};

export default Text;
