import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getJokesThunk } from "../app/features/joke/jokesThunks";
import Loader from "../components/Loader";
import ButtonAnotherJoke from "../components/buttonAnotherJoke/ButtonAnotherJoke";
import ShowMyJoke from "../components/ShowMyJoke/ShowMyJoke";
import FoodPage from "../components/FoodPage/FoodPage";

const Jokes = () => {
  const joke = useAppSelector((state) => state.jokes.joke);
  const loading = useAppSelector((state) => state.jokes.loading);
  const dispatch = useAppDispatch();

  const giveMeAnotherJoke = () => {
    dispatch(getJokesThunk());
  };

  return (
    <div>
      <div>
      <div>
        {loading ? <Loader /> : <ShowMyJoke joke={joke.joke} />}
      </div>
      <div>
      <ButtonAnotherJoke 
        id={joke.id} giveMeAnotherJoke={giveMeAnotherJoke} />
      </div>
      </div>

      <FoodPage />
    </div>
  );
};

export default Jokes;
