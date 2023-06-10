import {Routes, Route} from "react-router-dom";
import About from '../screens/About';
import Jokes from '../screens/Jokes';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Jokes/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default AppRouter