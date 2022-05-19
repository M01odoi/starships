import { personCard, shipCard } from "../../routes";
import randomPic from "../randomPic";
import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { IResultPeopleStarships } from "../../interfaces/IResultPeopleStarships";

const RenderListOfCards: React.FC<IResultPeopleStarships> = ({
  array,
  title,
}): JSX.Element => {
  const { arrayImage, isSquare } = useAppSelector(
    (state) => state.helpfulState
  );
  const { people, starships } = useAppSelector(
    (state) => state.peopleAndStarships
  );

  const navigate = useNavigate();

  const arrayOfElems = array?.map((elem) => (
    <li
      key={elem.name}
      onClick={() =>
        navigate(title === "People" ? personCard : shipCard, {
          state: { name: elem.name },
        })
      }
    >
      {isSquare && (
        <div className="card-wrapper-img">
          <img src={randomPic({ arrayImage })} alt="" />
        </div>
      )}
      <p>{elem.name}</p>
    </li>
  ));

  return (
    <ul className={isSquare ? "cardsVersion" : "listVersion"}>
      {arrayOfElems}
    </ul>
  );
};
export default RenderListOfCards;
