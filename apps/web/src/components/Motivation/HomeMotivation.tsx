import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { graphql, useLazyLoadQuery } from "react-relay";
import { MotivationList } from "./MotivationList";

export function HomeMotivation() {
  const query: any = useLazyLoadQuery(
    graphql`
      query HomeMotivationQuery {
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
