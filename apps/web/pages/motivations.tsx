import { motion } from "framer-motion";
import { Logo } from "ui";
import { Menu } from "../components/Menu";
import { AddMotivationModal } from "../components/Modal/AddMotivationModal";
import { Default } from "../components/Modal/Default";
import { MotivationCard } from "../components/MotivationCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};

export default function Motivations() {
  return (
    <div className="min-h-screen pt-[142px]">
      <div className="flex items-center justify-center">
        <Logo inPlural />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-[8.125rem] flex flex-col gap-20 mb-20"
      >
        <MotivationCard
          author="Jhon Doe"
          id="1"
          motivation="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </motion.div>
      <Menu />
    </div>
  );
}
