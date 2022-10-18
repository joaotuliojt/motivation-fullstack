import { Plus } from "phosphor-react";
import { Button, Input, TextArea } from "ui";
import { Default } from "./Default";

export function AddMotivationModal() {
  return (
    <Default
      title="Add motivation"
      trigger={
        <button className="mb-8 text-[#F9FAFB]">
          <Plus size={32} />
        </button>
      }
    >
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
