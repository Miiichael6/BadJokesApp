import scss from "./buttonAnotherJoke.module.scss"

type Props = {
  id: string;
  giveMeAnotherJoke: () => void;
};

const ButtonAnotherJoke = ({ id, giveMeAnotherJoke }: Props) => {
  return (
    <button onClick={giveMeAnotherJoke} className={scss.button}>
      <b>{id ? "Another joke" : "tell me a joke"}</b>
    </button>
  );
};

export default ButtonAnotherJoke;
