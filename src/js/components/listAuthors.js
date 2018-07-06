//Presentational Components

import React from 'react';
import  PropTypes  from 'prop-types';
import ItemAuthor from './itemauthor';

const ListAuthors = ({ authors }) => (
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
                    authors.map((aut) => (
                        <ItemAuthor author={aut} />
                    ))
                }
            </tbody>
        </table>
    </div>
)

ListAuthors.prototype = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequierd,
            name: PropTypes.string.isRequierd,
        }).isRequierd
    ).isRequierd
}

export default ListAuthors;