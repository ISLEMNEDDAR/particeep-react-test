import React from "react";
import "./css/FilmContainer.css"
import ListFilm from "../../component/film/ListFilms";
function FilmContainer(){
    return(
        <div className={"card_list_container bggrey botTopMar flex_column brd_box"}>
            <ListFilm/>
            <div className={"card_pagination_container"}>
                <p>pagination</p>
            </div>
        </div>
    )
}

export default FilmContainer