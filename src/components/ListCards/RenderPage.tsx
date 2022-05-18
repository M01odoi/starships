import { IResultsPeople } from "../../interfaces/IResultsPeople";
import { IResultsStarships } from "../../interfaces/IResultsStarships";
import React from "react";
import "./renderPage.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { personCard, shipCard } from "../../routes";
import { setIsSquare } from "../../store/reducers/helpfulStateSlice";
import randomPic from "../randomPic";

interface Props {
  array: IResultsPeople[] | IResultsStarships[] | undefined;
  title: string;
}

const RenderPage: React.FC<Props> = ({ array, title }): JSX.Element => {
  const { arrayImage, isSquare } = useAppSelector(
    (state) => state.helpfulState
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const renderListOfCards = () => {
    return array?.map((elem) => (
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
  };
  return (
    <div className="renderPage">
      <div className="header">
        <ul>
          <li>
            <button
              className={isSquare ? "activeColor" : "passiveColor"}
              onClick={() => dispatch(setIsSquare(true))}
            >
              <FontAwesomeIcon icon="square" className="fa-3x" />
            </button>
          </li>
          <li>
            <button
              className={isSquare ? "passiveColor" : "activeColor"}
              onClick={() => dispatch(setIsSquare(false))}
            >
              <FontAwesomeIcon icon="list" className="fa-3x" />
            </button>
          </li>
        </ul>
      </div>
      <h1>{title}</h1>
      <section className={isSquare ? "card-selection" : "list-selection"}>
        {!isSquare && (
          <div className="list-wrapper-img">
            <img src={randomPic({ arrayImage })} alt="" />
          </div>
        )}
        <ul className={isSquare ? "cardsVersion" : "listVersion"}>
          {renderListOfCards()}
        </ul>
      </section>
    </div>
  );
};

export default RenderPage;
