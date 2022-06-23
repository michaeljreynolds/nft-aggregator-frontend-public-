import React from "react";
import "./button.scss";
import classnames from "classnames";

interface IButtonProps {
  children: any;
  icon?: "wallet" | "profile";
  variant?: "primary" | "secondary" | "gradient";
  size?: "normal" | "large";
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const { children, icon, variant, size, onClick } = props;
  return (
    <button
      className={classnames(
        "btn",
        { btn_secondary: variant === "secondary" },
        { btn_gradient: variant === "gradient" },
        { btn_large: size === "large" }
      )}
      onClick={onClick}
    >
      {children}
      {icon === "wallet" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66675 5V16.3333C1.66675 17.4379 2.56218 18.3333 3.66675 18.3333H16.3334C17.438 18.3333 18.3334 17.4379 18.3334 16.3333V7C18.3334 5.89543 17.438 5 16.3334 5H14.1667M1.66675 5V2.91667C1.66675 2.5 2.00008 1.66667 3.33341 1.66667C4.66675 1.66667 10.0001 1.66667 12.5001 1.66667C13.0556 1.66667 14.1667 1.91667 14.1667 2.91667C14.1667 3.91667 14.1667 4.72222 14.1667 5M1.66675 5H14.1667M13.3334 10C12.7779 10 11.6667 10.3333 11.6667 11.6667C11.6667 13 12.7779 13.3333 13.3334 13.3333C13.889 13.3333 15.0001 13 15.0001 11.6667C15.0001 10.3333 13.889 10 13.3334 10Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;