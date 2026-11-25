
import type { InputHTMLAttributes } from "react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full min-w-0 bg-transparent text-xs text-white outline-none ${className}`}
      {...props}
    />
  );
}
