import './App.css';
import {
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
      <div className='container'>
        <div className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title">It English</h4>
            <table className="table table-borderless">
              <tbody>
              <tr>
                <td>Words in db</td>
                <td>{ props.ITVocabulary }</td>
              </tr>
              <tr>
                <td>Words in test</td>
                <td>30</td>
              </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/it" className="btn btn-outline-primary" role="button">Start</Link>
            </div>
          </div>
        </div>
        <div className="card border-info mb-3">
          <div className="card-body">
            <h4 className="card-title">Business English</h4>
            <table className="table table-borderless">
              <tbody>
              <tr>
                <td>Words in db</td>
                <td>{props.bussinesVocabulary}</td>
              </tr>
              <tr>
                <td>Words in test</td>
                <td>30</td>
              </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/bussines" className="btn btn-outline-info" role="button">Start</Link>
            </div>
          </div>
        </div>
        <div className="card border-success mb-3">
          <div className="card-body">
            <h4 className="card-title">Legal English</h4>
            <table className="table table-borderless">
              <tbody>
              <tr>
                <td>Words in db</td>
                <td>{props.legalVocabulary}</td>
              </tr>
              <tr>
                <td>Words in test</td>
                <td>30</td>
              </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/legal" className="btn btn-outline-success" role="button">Start</Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;