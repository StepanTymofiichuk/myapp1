import {
  Link
} from "react-router-dom";

function Header() {

  return (
    <div className="jumbotron text-center">
      <h1>English Testing App</h1>
        <ul className='nav'>
          <li>
            <Link to="/">English Vocabulary Testing</Link>
          </li>
          <li>
            <Link to="grammar">English Grammar Testing</Link>
          </li>
        </ul>
    </div>
  );
}

export default Header;