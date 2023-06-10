type Props = {
  id: string;
  giveMeAnotherJoke: () => void;
};

const ButtonAnotherJoke = ({ id, giveMeAnotherJoke }: Props) => {
  return (
    <button onClick={giveMeAnotherJoke}>
      {id ? "Another joke" : "tell me a joke"}
    </button>
  );
};

export default ButtonAnotherJoke;
