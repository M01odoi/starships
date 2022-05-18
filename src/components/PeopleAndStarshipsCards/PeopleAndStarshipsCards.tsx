import React, {useEffect, useState} from "react";
import {apiPeople, apiStarships} from "../../api/api";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setPeople, setStarships,} from "../../store/reducers/peopleStarshipsSlice";
import "./peopleAndStarshipsCards.scss";
import {useNavigate} from "react-router-dom";
import {peopleCards, starshipsCards} from "../../routes";
import {updateIsSquare} from "../../store/reducers/helpfulStateSlice";
import RenderCardCount from "./RenderCardCount";


const PeopleAndStarshipsCards: React.FC = (): JSX.Element => {
    const {people, starships} = useAppSelector(
        (state) => state.peopleAndStarships
    );
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    const getServerData = async () => {
        setIsLoading(true);
        const people = await apiPeople;
        const starships = await apiStarships;
        setIsLoading(false);
        dispatch(setPeople(people));
        dispatch(setStarships(starships));
        dispatch(updateIsSquare());
    };

    useEffect(() => {
        getServerData();
    }, []);

    return (
        <div className="people-ships-page">
            <h1>Information</h1>
            <ul>
                <li>
                    <RenderCardCount
                        onClick={() => navigate(peopleCards)}
                        nameOfCategory="People"
                        totalCount={people?.count || 0}
                        isLoading={isLoading}
                    />
                </li>
                <li>
                    <RenderCardCount
                        onClick={() => navigate(starshipsCards)}
                        nameOfCategory="Starships"
                        totalCount={starships?.count || 0}
                        isLoading={isLoading}
                    />
                </li>
            </ul>
        </div>
    );
};
export default PeopleAndStarshipsCards;
