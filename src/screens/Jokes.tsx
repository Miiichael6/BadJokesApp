// import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getJokesThunk } from "../app/features/joke/jokesThunks";
import Loader from "../components/Loader";

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
        {loading ? (
        <Loader />
        ) : (
          <h1>
            {joke.joke ? joke.joke : <p>Push the button for a joke 😂</p>}
          </h1>
        )}
      </div>
      <button onClick={giveMeAnotherJoke}>
        {joke.id ? "Another joke" : "tell me a joke"}
      </button>
    </div>
  );
};

export default Jokes;
