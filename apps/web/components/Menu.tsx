import { X, Pencil, Plus } from "phosphor-react";
import { useState } from "react";
import { Button } from "ui";
import { AddMotivationModal } from "./Modal/AddMotivationModal";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleEnableEdition = () => {};

  const handleAddMotivation = () => {};

  return (
    <div
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      className={`
      fixed 
      right-20 
      bottom-20 
      bg-[#413AC2] 
      rounded-full 
      overflow-hidden
      flex
      flex-col
      justify-end
      items-center
      transition-all
      ${isOpen && "h-56"}
      ${!isOpen && "h-16"}
      `}
    >
      <AddMotivationModal />
      <Button
        onClick={handleToggleMenu}
        className="rounded-full px-0 py-0 bg-none bg-transparent mb-6"
      >
        <Pencil size={32} />
      </Button>
      <Button onClick={handleToggleMenu} className="rounded-full px-4 py-4 ">
        <X size={32} />
      </Button>
    </div>
  );
}
