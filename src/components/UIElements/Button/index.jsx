import React from "react";
import {ButtonAs, ButtonLink} from "./Button";

const Button = ({
  type = "button",
  onClick,
  target,
  href,
  children,
  primary,
  disabled,
}) => {
  if (href) {
    return (
      <ButtonLink
        primary={primary}
        href={href}
        target={target}
        disabled={disabled}
      >
        {children}
      </ButtonLink>
    );
  }
  return (
    <ButtonAs
      primary={primary}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonAs>
  );
};

export default Button;
