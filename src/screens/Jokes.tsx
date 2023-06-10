import scss from "../sass/modules/BadJokesPage.module.scss"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getJokesThunk } from "../app/features/joke/jokesThunks";
import Loader from "../components/Loader";
import ButtonAnotherJoke from "../components/buttonAnotherJoke/ButtonAnotherJoke";
import ShowMyJoke from "../components/ShowMyJoke/ShowMyJoke";
import FootPage from "../components/FootPage/FootPage";

const Jokes = () => {
  const joke = useAppSelector((state) => state.jokes.joke);
  const loading = useAppSelector((state) => state.jokes.loading);
  const dispatch = useAppDispatch();

  const giveMeAnotherJoke = () => {
    dispatch(getJokesThunk());
  };

  return (
    <div className={scss.bad_jokes_page}>
      <div className={scss.bad_jokes_container}>
      <div className={scss.bad_jokes_text_container}>
        {loading ? <Loader /> : <ShowMyJoke joke={joke.joke} />}
      </div>
      <div className={scss.bad_jokes_button_container}>
      <ButtonAnotherJoke 
        id={joke.id} giveMeAnotherJoke={giveMeAnotherJoke} />
      </div>
      </div>
      <FootPage />
    </div>
  );
};

export default Jokes;
