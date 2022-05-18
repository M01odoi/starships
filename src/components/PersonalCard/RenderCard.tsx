import React from "react";
import randomPic from "../randomPic";
import {useAppSelector} from "../../hooks/redux";
import "./renderCard.scss";
import {IResultsPeople} from "../../interfaces/IResultsPeople";
import {IResultsStarships} from "../../interfaces/IResultsStarships";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    infoCard: IResultsPeople | IResultsStarships | undefined;
}

const RenderCard: React.FC<Props> = ({infoCard}): JSX.Element => {
    const {arrayImage} = useAppSelector((state) => state.helpfulState);

    const renderInfoLi: Function = (info: any): JSX.Element[] => {
        const arr = [];
        for (const elemKey in info) {
            let result;
            const nameOfField =
                elemKey.charAt(0).toUpperCase() + elemKey.slice(1).replace(/_/g, " ");
            if (/https.*/gm.test(info[elemKey])) {
                result = <a href={info[elemKey]}>more information</a>;
            } else {
                result =
                    info[elemKey].length &&
                    elemKey !== "created" &&
                    elemKey !== "edited" &&
                    info[elemKey];
            }
            result &&
            arr.push(
                <li key={elemKey}>
                    {nameOfField}: {result}
                </li>
            );
        }
        return arr;
    };

    return (
        <div className="info-card">
            <div className="info-card-header">
                <ul>
                    <li>
                        <button
                            onClick={() => window.history.go(-1)}
                            className="info-card-back-button"
                        >
                            <FontAwesomeIcon icon="arrow-left" className="fa-3x"/>
                        </button>
                    </li>
                    <li>
                        <button className="info-card-back-button">
                            <FontAwesomeIcon icon="square" className="fa-2x"/>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="info-card-main">
                <div className="wrapper-img">
                    <img src={randomPic({arrayImage})} alt=""/>
                </div>

                <h1>{infoCard?.name}</h1>
                <section>
                    <ul>{renderInfoLi(infoCard)}</ul>
                </section>
            </div>
        </div>
    );
};

export default RenderCard;
