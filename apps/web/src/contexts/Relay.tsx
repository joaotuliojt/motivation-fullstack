import { ReactNode } from "react";
import { RelayEnvironmentProvider } from "react-relay";

import Environment from "../relay/RelayEnvironment";

interface RelayProviderProps {
  children: ReactNode;
  environment: typeof Environment;
}

export const RelayProvider = ({
  children,
  environment,
}: RelayProviderProps) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};
