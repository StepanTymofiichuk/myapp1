import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Link
} from "react-router-dom";
import ItEnglish from './IEnglish';

function Header() {

  return (
    <div className="jumbotron text-center">
      <h1>Testing App</h1>
        <ul className='nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/it">It English</Link>
          </li>
          <li>
            <Link to="/bussines">Bussines English</Link>
          </li>
          <li>
            <Link to="/legal">Legal English</Link>
          </li>
        </ul>
    </div>
  );
}

export default Header;