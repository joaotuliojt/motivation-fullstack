import { ReactNode, useContext, createContext, useState } from "react";

interface EditableModeProviderProps {
  children: ReactNode;
}

type EditableModeData = {
  canEdit: boolean;
  setCanEdit: (can: boolean) => void;
  toggleCanEdit: () => void;
};

const EditableModeContext = createContext({} as EditableModeData);

export function EditableModeProvider({ children }: EditableModeProviderProps) {
  const [canEdit, setCanEdit] = useState(false);

  const toggleCanEdit = () => {
    setCanEdit(!canEdit);
  };

  return (
    <EditableModeContext.Provider
      value={{ canEdit, setCanEdit, toggleCanEdit }}
    >
      {children}
    </EditableModeContext.Provider>
  );
}

export const useEditableMode = () => useContext(EditableModeContext);
