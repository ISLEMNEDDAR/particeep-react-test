import React, {Fragment} from "react";

import FilmItem from "./FilmItem";
import "./css/ListFilm.css"
import {Row } from "antd";

function ListFilm({films,pageSize,currentPagination}){

    const renderListFilm = ()=>{
        const calculatePagStart = (pageSize*(currentPagination-1))
        const calculatePagEnd = pageSize*currentPagination
        const indexStart = currentPagination===1 ?  calculatePagStart : calculatePagStart
        const indexEnd =  calculatePagEnd<films.length ? calculatePagEnd : films.length
        return (
            <Fragment>
                {films.slice(indexStart,indexEnd).map((film,index)=>(<FilmItem key={film.id} film={film}/>))}
            </Fragment>
        )
    }
    return(
        <Row className={"list_film_container"}>
            {renderListFilm()}
        </Row>
    )
}
export default ListFilm