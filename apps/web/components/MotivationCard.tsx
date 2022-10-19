import { AnimatePresence, motion } from "framer-motion";
import { PencilSimple, TrashSimple } from "phosphor-react";
import { useMemo } from "react";
import { Button, IconButton } from "ui";
import { useEditableMode } from "../contexts/EditableMode";
import { IMotivation } from "../pages/motivations";
import { EditMotivationModal } from "./Modal/EditMotivationModal";

interface MotivationCardProps {
  motivation: IMotivation;
  onMotivationSelect: (motivation: IMotivation) => void;
}

const QuoteIcon = () => {
  return (
    <svg
      className="absolute left-0 top-0 translate-x-[-50%] translate-y-[-50%]"
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5419 4.349V13.8605C24.5419 15.1504 23.4962 16.1957 22.2063 16.1957C17.6038 16.1957 15.1003 20.9161 14.7533 30.2328H22.2063C23.4962 30.2328 24.5419 31.279 24.5419 32.5685V52.6515C24.5419 53.9408 23.4962 54.9862 22.2063 54.9862H2.33517C1.04471 54.9862 0 53.94 0 52.6515V32.5685C0 28.1022 0.449693 24.0037 1.33618 20.3854C2.24536 16.6754 3.64098 13.4315 5.48302 10.7437C7.37846 7.98132 9.74939 5.81368 12.5305 4.3036C15.3304 2.78438 18.5863 2.01382 22.2071 2.01382C23.4962 2.01382 24.5419 3.05903 24.5419 4.349ZM54.6642 16.1958C55.9535 16.1958 57 15.1496 57 13.8606V4.34916C57 3.05919 55.9537 2.01399 54.6642 2.01399C51.0449 2.01399 47.7885 2.7847 44.9896 4.30377C42.208 5.81385 39.8357 7.98148 37.94 10.7438C36.0986 13.4317 34.703 16.6757 33.7936 20.3866C32.9076 24.006 32.4579 28.1045 32.4579 32.5686V52.6517C32.4579 53.941 33.5039 54.9863 34.7936 54.9863H54.664C55.9533 54.9863 56.9989 53.9402 56.9989 52.6517V32.5685C56.9989 31.2792 55.9535 30.2328 54.664 30.2328H47.3174C47.6591 20.9163 50.1261 16.1958 54.6642 16.1958Z"
        fill="#F9FAFB"
      />
    </svg>
  );
};

export function MotivationCard({
  motivation,
  onMotivationSelect,
}: MotivationCardProps) {
  const { canEdit } = useEditableMode();

  const containerVariant = useMemo(() => {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delay: 1 } },
    };
  }, []);

  const buttonsVariant = useMemo(() => {
    return {
      initial: {
        y: ["-120%"],
        transition: {
          duration: 0.4,
        },
        opacity: 0,
      },
      show: {
        y: "-50%",
        opacity: 1,
      },
      exit: {
        y: "-120%",
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      },
    };
  }, []);

  const handleDeleteMotivation = (id: string) => {
    alert("TODO");
  };

  const handleSelectMotivation = () => {
    onMotivationSelect(motivation);
  };

  return (
    <>
      <motion.div
        key={motivation.id}
        variants={containerVariant}
        className="relative bg-[#232328] w-max max-w-[50.875rem] m-auto p-[2.625rem] text-gray-50 font-sans rounded-lg"
      >
        <AnimatePresence>
          {canEdit ? (
            <>
              <motion.div
                variants={buttonsVariant}
                initial={"initial"}
                animate={"show"}
                exit={"exit"}
                className="flex gap-3 absolute top-0 right-0"
              >
                <IconButton onClick={handleSelectMotivation}>
                  <PencilSimple size={20} />
                </IconButton>
                <IconButton>
                  <TrashSimple size={20} />
                </IconButton>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
        <QuoteIcon />
        <blockquote className="font-normal italic text-xl mb-6">
          {motivation.phrase}
        </blockquote>
        <cite className="font-medium text-xl not-italic">
          {motivation.author}
        </cite>
      </motion.div>
    </>
  );
}
