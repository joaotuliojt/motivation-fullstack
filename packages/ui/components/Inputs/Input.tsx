import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  InputHTMLAttributes,
} from "react";

//interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface InputProps extends ComponentPropsWithRef<"input"> {}

export function Input({ className, type = "text", ...rest }: InputProps) {
  return (
    <input
      type=""
      className={`pt-4 pb-4 pl-6 font-cursive border-[1px] border-[#F9FAFB] bg-transparent outline-none ${className}`}
      {...rest}
    />
  );
}
