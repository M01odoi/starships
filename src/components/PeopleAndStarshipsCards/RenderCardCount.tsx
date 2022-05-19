import React from "react";

interface Props {
  nameOfCategory: string;
  totalCount: number;
  onClick: () => void;
  isLoading: boolean;
}

const RenderCardCount: React.FC<Props> = ({
  nameOfCategory,
  totalCount,
  onClick,
  isLoading,
}): JSX.Element => {
  return (
    <>
      <section onClick={onClick}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p className="big-size-number">{totalCount}</p>
        )}
      </section>
      <h2>{nameOfCategory}</h2>
    </>
  );
};

export default RenderCardCount;
