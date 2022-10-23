import { motion } from "framer-motion";
import { Link, ArrowLeft } from "phosphor-react";
import { useState, useEffect } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { Button, Logo } from "ui";
import { IMotivation } from "../../pages/motivations";
import { generateMotivations } from "../../utils/makeData";
import { Menu } from "../Menu";
import { AddMotivationModal } from "../Modal/AddMotivationModal";
import { EditMotivationModal } from "../Modal/EditMotivationModal";
import { Motivation } from "./Motivation";
import { MotivationListQuery } from "./__generated__/MotivationListQuery.graphql";
import { MotivationList_query$key } from "./__generated__/MotivationList_query.graphql";

interface MotivationListProps {
  query: MotivationList_query$key;
}

export function MotivationList({ query }: MotivationListProps) {
  const { data, loadNext } = usePaginationFragment<
    MotivationListQuery,
    MotivationList_query$key
  >(
    graphql`
      fragment MotivationList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 5 }
        after: { type: String }
      )
      @refetchable(queryName: "MotivationListQuery") {
        motivations(first: $first, after: $after)
          @connection(key: "MotivationList_motivations") {
          edges {
            node {
              id
              phrase
              author
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
    query
  );

  const { motivations } = data;
  const [selectedMotivation, setSelectedMotivation] = useState<IMotivation>(
    {} as IMotivation
  );
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  /* useEffect(() => {
    setMotivations(generateMotivations(10));
  }, []); */

  const handleSelectMotivation = (motivation: IMotivation) => {
    setSelectedMotivation(motivation);
    setEditModalIsOpen(true);
  };

  const toggleAddModal = () => {
    setAddModalIsOpen(!addModalIsOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-[142px]">
      <Link href={"/"}>
        <a className="absolute left-10 top-16 text-white">
          <ArrowLeft size={40} />
        </a>
      </Link>
      <div className="flex items-center justify-center">
        <Logo inPlural />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-[8.125rem] flex flex-col gap-20 mb-20"
      >
        {motivations.edges ? (
          <>
            {motivations.edges.map((item) => (
              <Motivation
                key={item?.node?.id}
                motivation={item?.node as IMotivation}
                onMotivationSelect={handleSelectMotivation}
              />
            ))}
          </>
        ) : null}
      </motion.div>
      <Button className="m-auto block mb-20" onClick={() => loadNext(5)}>
        Load More
      </Button>
      <Menu onOpenAddModal={toggleAddModal} />
      <EditMotivationModal
        motivation={selectedMotivation}
        isOpen={editModalIsOpen}
        onOpenChange={setEditModalIsOpen}
      />
      <AddMotivationModal
        isOpen={addModalIsOpen}
        onOpenChange={setAddModalIsOpen}
        motivation={selectedMotivation}
      />
    </div>
  );
}
