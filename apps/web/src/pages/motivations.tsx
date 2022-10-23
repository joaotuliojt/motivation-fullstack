import { Suspense } from "react";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { MotivationList } from "../components/Motivation/MotivationList";
import { ErrorBoundary } from "react-error-boundary";

export interface IMotivation {
  id: string;
  phrase: string;
  author: string;
}

export default function Motivations() {
  const query: any = useLazyLoadQuery(
    graphql`
      query motivationsQuery {
        ...MotivationList_query
      }
    `,
    {},
    { fetchPolicy: "store-or-network" }
  );

  return (
    <ErrorBoundary fallbackRender={({ error }) => <h1>{error.message}</h1>}>
      <Suspense fallback="Loading...">
        <MotivationList query={query} />
      </Suspense>
    </ErrorBoundary>
  );
}
