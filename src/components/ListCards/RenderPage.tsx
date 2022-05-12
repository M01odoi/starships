import {IResultsPeople} from "../../interfaces/IResultsPeople";
import {IResultsStarships} from "../../interfaces/IResultsStarships";
import React from "react";
import './renderPage.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {personCard} from "../../routes";
import {setIsSquare} from "../../store/reducers/helpfulStateSlice";

interface Props {
    array: IResultsPeople[] | IResultsStarships[] | undefined;
    title: string,
}

const RenderPage: React.FC<Props> = ({array, title}): JSX.Element => {
    const {arrayImage, isSquare} = useAppSelector(state => state.helpfulState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const randomPic: Function = (): string => {
        return arrayImage[+((Math.random()) * arrayImage.length).toFixed(0)];
    }
    const renderListOfCards = () => {
        // const loopOfobj = (elem: any) => {
        //     console.log(elem);
        //     const arr = [];
        //     for (const elemKey in elem) {
        //         console.log(elem[elemKey], elemKey);
        //         if (!/https.*/gm.test(elem[elemKey]) && elemKey !== 'created' && elemKey !== 'edited')
        //             arr.push(`${elemKey}: ${elem[elemKey]}\t`)
        //     }
        //     return arr;
        // }

        return (
            array?.map((elem) => <li key={elem.name} onClick={() => navigate(personCard, {state: {name: elem.name}})}>
                {/*{fields?.map(name => elem[name])}*/}
                {/*{loopOfobj(elem)}*/}
                {/*{for()}*/}
                {isSquare && <div className='card-wrapper-img'>
                  <img src={randomPic()} alt=""/>
                </div>}
                <p>{elem.name}</p>
                {/*{fields && elem[fields[0]]}*/}
                {/*{elem}*/}
            </li>)
        )
    }
    return (
        <div className="renderPage">
            <div className="header">
                <ul>
                    <li>
                        <button className={isSquare ? "activeVersion" : "passiveVersion"}
                                onClick={() => dispatch(setIsSquare(true))}>
                            <FontAwesomeIcon icon="square" className="fa-3x"/>
                        </button>
                    </li>
                    <li>
                        <button className={isSquare ? "passiveVersion" : "activeVersion"}
                                onClick={() => dispatch(setIsSquare(false))}>
                            <FontAwesomeIcon icon="list" className="fa-3x"/>
                        </button>
                    </li>
                </ul>
            </div>
            <h1>{title}</h1>
            <section className={isSquare ? "card-selection" : "list-selection"}>
                {
                    !isSquare && <div className="list-wrapper-img">
                      <img src={randomPic()} alt=""/>
                    </div>
                }
                <ul className={isSquare ? "cardsVersion" : "listVersion"}>
                    {renderListOfCards()}
                </ul>
            </section>
        </div>
    )
}

export default RenderPage;