import React from "react";
import { useLocation } from "react-router-dom";
import RenderCard from "./RenderCard";
import { useAppSelector } from "../../hooks/redux";

interface Props {
  name: string;
}

const PersonCard: React.FC = (): JSX.Element => {
  const location: any = useLocation();
  const { people } = useAppSelector((state) => state.peopleAndStarships);
  return (
    <>
      <RenderCard
        infoCard={people?.results
          .filter((elem) => elem.name === location.state.name)
          .find((elem) => elem.name === location.state.name)}
      />
    </>
  );
};

export default PersonCard;
