import { Link } from "react-router-dom";

const FootPage = () => {
  return (
    <footer>
      <Link to={"/about"}>About this App</Link>
    </footer>
  );
};

export default FootPage;
