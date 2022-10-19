import { DialogProps } from "@radix-ui/react-dialog";
import { Button, Input, TextArea } from "ui";
import { IMotivation } from "../../pages/motivations";
import { Default } from "./Default";

interface EditMotivationModalProps extends Partial<DialogProps> {
  isOpen?: boolean;
  motivation: IMotivation;
}
export function EditMotivationModal({
  isOpen,
  onOpenChange,
  motivation,
}: EditMotivationModalProps) {
  return (
    <Default
      title="Edit motivation"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <form className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="author">Author</label>
          <Input defaultValue={motivation?.author} id="author" type="text" />
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="motivation">Motivation</label>
          <TextArea
            defaultValue={motivation?.phrase}
            id="motivation"
            className="h-52"
          />
        </div>
        <Button className="mt-12">Edit motivation</Button>
      </form>
    </Default>
  );
}
