import { ButtonHTMLAttributes } from "react";
import { Slot, SlotProps } from "@radix-ui/react-slot";

interface ButtonProps extends SlotProps {
  asChild?: boolean;
}

export const Button = ({ asChild, className, ...rest }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`
        bg-indigo-600 
        px-8 py-4 
        rounded 
        uppercase 
        font-sans 
        text-white 
        font-normal 
        text-2xl
        transition
        relative
        hover:brightness-75
        cursor-pointer
        ${className}
      `}
      {...rest}
    />
  );
};
