import { InputHTMLAttributes } from "react";

interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={`pt-4 pb-4 pl-6 font-cursive border-[1px] border-[#F9FAFB] bg-transparent outline-none ${className}`}
      {...rest}
    />
  );
}
