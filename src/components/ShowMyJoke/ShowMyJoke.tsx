type Props = {
  joke: string;
};

const ShowMyJoke = ({ joke }: Props) => {
  return <h1>{joke ? joke : <p>Push the button for a joke 😂</p>}</h1>;
};

export default ShowMyJoke