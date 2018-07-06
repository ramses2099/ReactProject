import { GET_ALL_AUTHORS } from '../actions/actionType';

export function getAutors(state = [], action) {

    switch (action.type) {
        case GET_ALL_AUTHORS:
            return Object.assign({}, state, { list: action.playload });
        default:
            return state;
    }

}
