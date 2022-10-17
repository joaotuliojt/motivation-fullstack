import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const C = Component as React.ElementType;
  return <C {...pageProps} />;
};

export default MyApp;
