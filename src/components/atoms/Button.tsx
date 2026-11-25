
import type { ButtonHTMLAttributes } from "react";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`transition-colors disabled:cursor-default ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
