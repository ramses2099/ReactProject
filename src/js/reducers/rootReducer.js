
import { GET_ALL_AUTHORS } from '../actions/actionType';

const inititalState ={
    authors:[]
}

const rootReducer = (state =inititalState, action) => {
     switch (action.type) {
         case GET_ALL_AUTHORS:
             return state.authors.push(action.playload);                 
         default:
            return state;
     }
};

export default rootReducer;