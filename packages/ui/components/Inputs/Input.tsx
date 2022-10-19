import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`pt-4 pb-4 pl-6 font-cursive border-[1px] border-[#F9FAFB] bg-transparent outline-none ${className}`}
      {...rest}
    />
  );
}
