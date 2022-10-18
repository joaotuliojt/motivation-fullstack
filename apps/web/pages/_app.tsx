import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { LayoutGroup } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const C = Component as React.ElementType;

  return (
    <LayoutGroup>
      <C {...pageProps} />
    </LayoutGroup>
  );
};

export default MyApp;
