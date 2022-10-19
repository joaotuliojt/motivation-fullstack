import * as Dialog from "@radix-ui/react-dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { XCircle } from "phosphor-react";
import { ReactElement, useEffect, useState } from "react";

interface DefaultProps extends Partial<DialogProps> {
  title: string;
  trigger?: ReactElement;
  children: ReactElement;
  isOpen?: boolean;
}

export function Default({
  title,
  trigger,
  children,
  isOpen,
  onOpenChange,
}: DefaultProps) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
          <Dialog.Trigger asChild>{trigger ? trigger : null}</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed w-screen h-screen top-0 left-0 grid place-items-center bg-[#000000b5]">
              <Dialog.Content className="relative min-h-[625px] min-w-[600px] bg-[#232328] rounded-lg pt-16 pb-16 pl-20 pr-20 text-[#F9FAFB]">
                <Dialog.Title className="text-center font-cursive font-bold text-5xl mb-11">
                  {title}
                </Dialog.Title>
                {children}
                <Dialog.Close>
                  <XCircle
                    size={32}
                    className="absolute top-0 right-0 translate-y-[-120%] hover:brightness-75"
                  />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      ) : null}
    </>
  );
}
