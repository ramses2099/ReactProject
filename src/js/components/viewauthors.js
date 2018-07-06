import React from 'react'
import { connect } from 'react-redux';
import ListAuthors from './listAuthors';
import getAllAuthors from '../actions/actionCreatorAuthors';


const mapStateToProp = (state) =>{
    const list =  getAllAuthors();

    return {
        authors: list.playload
    }
}

const ViewAuthors = connect(mapStateToProp)(ListAuthors)

export default ViewAuthors;