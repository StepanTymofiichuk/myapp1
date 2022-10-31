import React from 'react'
import { Link } from 'react-router-dom'
import { testDescription } from './resources/description'

console.log(testDescription)

function EnglishGrammar() {
    return (
        <div className="card border-primary mb-3">
            <div className="card-body">
                <h4 className="card-title">It English</h4>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td>Tenses</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Questions</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <Link to="/present" className="btn btn-outline-primary" role="button">Start</Link>
                </div>
            </div>
        </div>
    )
}

export default EnglishGrammar