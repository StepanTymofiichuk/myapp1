import './App.css';
import {
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <div className='container'>
      <div className="card border-primary mb-3">
        <div className="card-body">
          <h4 className="card-title">IT English</h4>
          <div className="row">
            <div className="col">
              <p>Words in db</p>
              <p>Words in test</p>
            </div>
            <div className='col'>
              <p>{props.ITAmount}</p>
              <p>20</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/it">Testing</Link>
            </div>
            <div className="col">
              <Link to="/study-it">Studying</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card border-info mb-3">
        <div className="card-body">
          <h4 className="card-title">Business English</h4>
          <div className="row">
            <div className="col">
              <p>Words in db</p>
              <p>Words in test</p>
            </div>
            <div className='col'>
              <p>{props.businessAmount}</p>
              <p>20</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/bussines">Testing</Link>
            </div>
            <div className="col">
              <Link to="/study-bussines">Studying</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card border-success mb-3">
        <div className="card-body">
          <h4 className="card-title">Legal English</h4>
          <div className="row">
            <div className="col">
              <p>Words in db</p>
              <p>Words in test</p>
            </div>
            <div className='col'>
              <p>{props.legalAmount}</p>
              <p>20</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/legal">Testing</Link>
            </div>
            <div className="col">
              <Link to="/study-legal">Studying</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;