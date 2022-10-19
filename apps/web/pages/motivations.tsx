import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Logo } from "ui";
import { Menu } from "../components/Menu";
import { AddMotivationModal } from "../components/Modal/AddMotivationModal";
import { EditMotivationModal } from "../components/Modal/EditMotivationModal";
import { MotivationCard } from "../components/MotivationCard";
import { generateMotivations } from "../utils/makeData";

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

export interface IMotivation {
  id: string;
  phrase: string;
  author: string;
}

export default function Motivations() {
  const [selectedMotivation, setSelectedMotivation] = useState<IMotivation>(
    {} as IMotivation
  );
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [motivations, setMotivations] = useState<IMotivation[]>([]);

  useEffect(() => {
    setMotivations(generateMotivations(10));
  }, []);

  const handleSelectMotivatin = (motivation: IMotivation) => {
    setSelectedMotivation(motivation);
    setEditModalIsOpen(true);
  };

  const toggleAddModal = () => {
    setAddModalIsOpen(!addModalIsOpen);
  };

  return (
    <div className="min-h-screen pt-[142px]">
      <Link href={"/"}>
        <a className="absolute left-10 top-16 text-white">
          <ArrowLeft size={40} />
        </a>
      </Link>
      <div className="flex items-center justify-center">
        <Logo inPlural />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-[8.125rem] flex flex-col gap-20 mb-20"
      >
        {motivations.map((motivation) => (
          <MotivationCard
            key={motivation.id}
            motivation={motivation}
            onMotivationSelect={handleSelectMotivatin}
          />
        ))}
      </motion.div>
      <Menu onOpenAddModal={toggleAddModal} />
      <EditMotivationModal
        motivation={selectedMotivation}
        isOpen={editModalIsOpen}
        onOpenChange={setEditModalIsOpen}
      />
      <AddMotivationModal
        isOpen={addModalIsOpen}
        onOpenChange={setAddModalIsOpen}
        motivation={selectedMotivation}
      />
    </div>
  );
}
