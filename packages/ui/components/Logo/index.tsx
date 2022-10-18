import { motion } from "framer-motion";

interface LogoProps {
  inPlural?: boolean;
}

export function Logo({ inPlural }: LogoProps) {
  return (
    <motion.h1
      layoutId="logo"
      transition={{
        layout: {
          duration: 1,
        },
      }}
      /* initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }} */
      className="font-cursive uppercase text-gray-50 font-bold text-[3.938rem] relative flex"
      layout="position"
    >
      Motivation
      {inPlural ? (
        <motion.span
          className="text-[#1C1C1E] block"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          s
        </motion.span>
      ) : null}
    </motion.h1>
  );
}
