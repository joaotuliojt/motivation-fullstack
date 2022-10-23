import React, { Suspense } from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { EditableModeProvider } from "../contexts/EditableMode";
import { RelayProvider } from "../contexts/Relay";
import { Environment } from "../relay";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const C = Component as React.ElementType;

  return (
    <RelayProvider environment={Environment}>
      <EditableModeProvider>
        <Suspense fallback="Loading...">
          <C {...pageProps} />
        </Suspense>
      </EditableModeProvider>
    </RelayProvider>
  );
};

export default MyApp;
