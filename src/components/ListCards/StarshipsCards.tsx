import { useAppSelector } from "../../hooks/redux";
import RenderPage from "./RenderPage";

const StarshipsCards = (): JSX.Element => {
  const { starships } = useAppSelector((state) => state.peopleAndStarships);

  return (
    <>
      <RenderPage array={starships?.results} title="Starships" />
    </>
  );
};

export default StarshipsCards;
