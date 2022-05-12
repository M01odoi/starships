import RenderPage from "./RenderPage";
import {useAppSelector} from "../../hooks/redux";
import {IResultsPeople} from "../../interfaces/IResultsPeople";

const PeopleCards = (): JSX.Element => {
    const {people} = useAppSelector(state => state.peopleAndStarships);

    return (
        <RenderPage array={people?.results} title="People"/>
    )
}

export default PeopleCards;