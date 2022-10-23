import { Suspense } from "react";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { MotivationList } from "../components/Motivation/MotivationList";
import { ErrorBoundary } from "react-error-boundary";
import { HomeMotivation } from "../components/Motivation/HomeMotivation";

export interface IMotivation {
  id: string;
  phrase: string;
  author: string;
}

export default function Motivations() {
  return <HomeMotivation />;
}
