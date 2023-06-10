import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { getJoke, loadingJoke } from "./jokesSlice";
import { JokeInterface } from "./jokesInterfaces";

export const getJokesThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const options = {
        headers: {
          Accept: "application/json",
        },
      };

      dispatch(loadingJoke());
      const response = await axios.get("https://icanhazdadjoke.com/", options);
      const data: JokeInterface = response.data;

      dispatch(getJoke(data));
    } catch (error: any) {
      console.error(error.message);
    }
  };
};
