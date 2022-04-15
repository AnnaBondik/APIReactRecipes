import './App.css';
import Nutrition from './Nutrition';
import Search from './Search';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
return  <Router>
  <nav>
    <Link className='link' to='/'>Recipe Search</Link>
    <Link className='link' to='/nutrition'>Nutrition facts</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Search/>}/>
    <Route path="/nutrition" element={<Nutrition/>}/>
  </Routes>
</Router>
}

export default App;
