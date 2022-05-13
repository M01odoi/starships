import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import RenderCard from "./RenderCard";

const ShipCard: React.FC = (): JSX.Element => {
  const location: any = useLocation();
  const { starships } = useAppSelector((state) => state.peopleAndStarships);
  return (
    <>
      <RenderCard
        infoCard={starships?.results
          .filter((elem) => elem.name === location.state.name)
          .find((elem) => elem.name === location.state.name)}
      />
    </>
  );
};
export default ShipCard;
