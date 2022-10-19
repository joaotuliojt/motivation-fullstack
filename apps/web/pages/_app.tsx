import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { LayoutGroup } from "framer-motion";
import { EditableModeProvider } from "../contexts/EditableMode";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const C = Component as React.ElementType;

  return (
    <EditableModeProvider>
      <C {...pageProps} />
    </EditableModeProvider>
  );
};

export default MyApp;
