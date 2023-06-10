import scss from "./footPage.module.scss"
import { Link } from "react-router-dom";

const FootPage = () => {
  return (
    <footer className={scss.foot_page}>
      <p>Created By Miiichael6</p>

      <Link to={"/about"}>About this App</Link>
    </footer>
  );
};

export default FootPage;
