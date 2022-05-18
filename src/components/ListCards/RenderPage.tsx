import React from "react";
import "./renderPage.scss";
import {useAppSelector} from "../../hooks/redux";
import randomPic from "../randomPic";
import ChangeStyleButtons from "./ChangeStyleButtons";
import RenderListOfCards from "./RenderListOfCards";
import {IResultPeopleStarships} from "../../interfaces/IResultPeopleStarships";

const RenderPage: React.FC<IResultPeopleStarships> = ({array, title}): JSX.Element => {
    const {arrayImage, isSquare} = useAppSelector(
        (state) => state.helpfulState
    );

    return (
        <div className="renderPage">
            <ChangeStyleButtons/>
            <h1>{title}</h1>
            <section className={isSquare ? "card-selection" : "list-selection"}>
                {!isSquare && (
                    <div className="list-wrapper-img">
                        <img src={randomPic({arrayImage})} alt=""/>
                    </div>
                )}
                <RenderListOfCards array={array} title={title}/>
            </section>
        </div>
    );
};

export default RenderPage;
