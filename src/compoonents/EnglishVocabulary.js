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
            <table className="table table-borderless">
              <tbody>
              <tr>
                <td>Words in db</td>
                <td>{ props.ITAmount }</td>
              </tr>
              <tr>
                <td>Words in test</td>
                <td>20</td>
              </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 row-6 mx-auto">
              <Link to="/it" className="btn btn-outline-primary" role="button">Testing</Link>
              <Link to="/study-it" className="btn btn-outline-primary" role="button">Studying</Link>
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
                <td>{props.businessAmount}</td>
              </tr>
              <tr>
                <td>Words in test</td>
                <td>20</td>
              </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 row-6 mx-auto">
              <Link to="/bussines" className="btn btn-outline-info" role="button">Testing</Link>
              <Link to="/study-bussines" className="btn btn-outline-info" role="button">Studying</Link>
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
                <td>{props.legalAmount}</td>
              </tr>
              <tr>
                <td>Words in test</td>
                <td>20</td>
              </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 row-6 mx-auto">
              <Link to="/legal" className="btn btn-outline-success" role="button">Testing</Link>
              <Link to="/study-legal" className="btn btn-outline-success" role="button">Studying</Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;