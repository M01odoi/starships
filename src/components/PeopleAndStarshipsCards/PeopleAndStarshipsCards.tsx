import React, {useEffect, useState} from "react";
import {apiPeople, apiStarships} from "../../api/api";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setPeople, setStarships} from "../../store/reducers/peopleStarshipsSlice";
import './peopleAndStarshipsCards.scss'
import {IStarships} from "../../interfaces/IStarships";
import {useNavigate} from "react-router-dom";
import {peopleCards, starshipsCards} from "../../routes";
import {updateIsSquare} from "../../store/reducers/helpfulStateSlice";

interface Props {
    nameOfCategory: string,
    totalCount: number,
    onClick: () => void,
}

const PeopleAndStarshipsCards: React.FC = (): JSX.Element => {
    const {people, starships} = useAppSelector(state => state.peopleAndStarships);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch();

    const getServerData = async () => {
        setIsLoading(true)
        const people = await apiPeople
        const starships = await apiStarships
        setIsLoading(false)
        dispatch(setPeople(people));
        dispatch(setStarships(starships));
        dispatch(updateIsSquare());
    }

    const RenderCardCount: React.FC<Props> = ({nameOfCategory, totalCount, onClick}): JSX.Element => {
        return (
            <>
                <section onClick={onClick}>
                    {isLoading ? <p>Loading...</p> : <p className="big-size-number">{totalCount}</p>}
                </section>
                <h2>{nameOfCategory}</h2>
            </>
        )
    }

    useEffect(() => {
        getServerData();
    }, []);
    return (
        <div className="people-ships-page">
            <h1>Information</h1>
            <ul>
                <li><RenderCardCount onClick={()=>navigate(peopleCards)} nameOfCategory="People" totalCount={people?.count || 0}/></li>
                <li><RenderCardCount onClick={()=>navigate(starshipsCards)} nameOfCategory="Starships" totalCount={starships?.count || 0}/></li>
            </ul>
        </div>
    )
}
export default PeopleAndStarshipsCards;