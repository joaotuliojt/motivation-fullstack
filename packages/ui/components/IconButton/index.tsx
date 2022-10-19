import { ButtonHTMLAttributes } from "react";
import { Slot, SlotProps } from "@radix-ui/react-slot";

interface ButtonProps extends SlotProps {
  asChild?: boolean;
}

export const IconButton = ({ asChild, className, ...rest }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`
        bg-indigo-600
        max-w-[40px]
        max-h-[40px]
        min-w-[40px]
        min-h-[40px]
        flex
        items-center
        justify-center
        rounded-full
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
