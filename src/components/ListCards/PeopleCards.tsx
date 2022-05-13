import RenderPage from "./RenderPage";
import { useAppSelector } from "../../hooks/redux";

const PeopleCards = (): JSX.Element => {
  const { people } = useAppSelector((state) => state.peopleAndStarships);

  return <RenderPage array={people?.results} title="People" />;
};

export default PeopleCards;
