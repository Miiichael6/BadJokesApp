import scss from "./showMyJoke.module.scss"

type Props = {
  joke: string;
};

const ShowMyJoke = ({ joke }: Props) => {
  return <h1 className={scss.show_my_joke}>{joke ? joke : "Push the button for a joke 😂"}</h1>;
};

export default ShowMyJoke