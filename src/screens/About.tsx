import scss from "../sass/modules/AboutBadJokes.module.scss"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={scss.about_bad_jokes_page}>
      <div className={scss.about_bad_jokes_container}>
      <h1>About <span>BadJokes</span></h1>
      <p>
        This app was made using typescript, is just a little 
        <br />
        practice because I wanted to know how much faster I can code <br />
        also its components are very clean, I used Redux and another <br />
        tecnologies for routes like react-router-dom, etc...
        <br />
        I really hope you enjoy this app Hahaha, and I know.
        <br />
        the jokes are too bad! , but maybe one make you laugh
      </p>
      <div className={scss.back_to_bad_jokes_page}>
      <Link to={"/"}>back to Jokes</Link>
      </div>
      </div>
    </div>
  )
}

export default About