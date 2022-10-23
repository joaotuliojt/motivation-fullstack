import { DialogProps } from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";
import { Button, Input, TextArea } from "ui";
import { IMotivation } from "../../pages/motivations";
import { Default } from "./Default";

interface AddMotivationModalProps extends Partial<DialogProps> {
  isOpen?: boolean;
  motivation: IMotivation;
}

export function AddMotivationModal({
  isOpen,
  onOpenChange,
}: AddMotivationModalProps) {
  return (
    <Default title="Add motivation" isOpen={isOpen} onOpenChange={onOpenChange}>
      <form className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="author">Author</label>
          <Input id="author" type="text" />
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="motivation">Motivation</label>
          <TextArea id="motivation" className="h-52" />
        </div>
        <Button className="mt-12">Add motivation</Button>
      </form>
    </Default>
  );
}
