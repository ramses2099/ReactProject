import React, { Component } from 'react'
import ViewAuthors  from './viewauthors';
import Authors from './Authors';

//<ViewAuthors />

export default class Body extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <Authors />     
                    </div>
                </div>
            </div>
        )
    }
}
