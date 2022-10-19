import * as Dialog from "@radix-ui/react-dialog";
import { XCircle } from "phosphor-react";
import { ReactElement, useEffect, useState } from "react";

interface DefaultProps {
  title: string;
  trigger: ReactElement;
  children: ReactElement;
}

export function Default({ title, trigger, children }: DefaultProps) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <Dialog.Root>
          <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="absolute left-0 top-0 right-0 bottom-0 grid place-items-center bg-[#000000b5]">
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
