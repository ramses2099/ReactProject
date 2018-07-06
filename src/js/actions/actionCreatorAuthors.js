import { GET_ALL_AUTHORS } from './actionType';

const getAllAuthors =() =>{
    const authors =[
        {"Id":1,"Name":"Jane Austen"},
        {"Id":2,"Name":"Charles Dickens"},
        {"Id":3,"Name":"Miguel de Cervantes"}]
   
    return {
        type: GET_ALL_AUTHORS,
        playload: authors
    }
}

export default getAllAuthors;