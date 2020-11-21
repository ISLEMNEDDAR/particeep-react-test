import {movies$} from "../mock_data/filmData";

const getFilms = async ()=>{
    return await movies$.then(res => res)
}


export {
    getFilms
}