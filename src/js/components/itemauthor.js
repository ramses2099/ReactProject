//Presentational Components

import React from 'react';
import PropTypes from 'prop-types';

const ItemAuthor = ({author}) =>(
    <tr>
     <td>{author.Id}</td>
     <td>{author.Name}</td>
  </tr>
)

ItemAuthor.PropTypes = {
    author: PropTypes.object.isRequired
}

export default ItemAuthor