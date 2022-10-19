import { X, Pencil, Plus, List } from "phosphor-react";
import { useState } from "react";
import { Button } from "ui";
import { AddMotivationModal } from "./Modal/AddMotivationModal";
import { useEditableMode } from "../contexts/EditableMode";

interface MenuProps {
  onOpenAddModal: () => void;
}

export function Menu({ onOpenAddModal }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { canEdit, toggleCanEdit } = useEditableMode();

  const handleToggleEditMode = () => {
    toggleCanEdit();
  };
  const handleOpenAddModal = () => {
    onOpenAddModal();
  };

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
      <Button
        onClick={handleOpenAddModal}
        className="rounded-full px-0 py-0 bg-none bg-transparent mb-7"
      >
        <Plus size={32} />
      </Button>
      <Button
        onClick={handleToggleEditMode}
        className="rounded-full px-0 py-0 bg-none bg-transparent mb-6"
      >
        <Pencil size={32} color={canEdit ? "#4ADE80" : "#F9FAFB"} />
      </Button>
      <Button
        onClick={handleToggleMenu}
        className="rounded-full px-4 py-4"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {!isOpen ? <List size={32} /> : <X size={32} />}
      </Button>
    </div>
  );
}
