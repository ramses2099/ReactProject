import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Authors extends Component {
    constructor() {
        super();
        this.state = { data: [] }
    }
    //
    componentDidMount() {
        fetch('http://localhost/WebApi/api/Authors')
        .then(res =>res.json())
        .then(json => this.setState({ data: json }));
    }
    //
    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                this.state.data.map((aut) => (
                                    <tr>
                                        <td>{aut.Id}</td>
                                        <td>{aut.Name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Authors;