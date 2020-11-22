import React, {useEffect} from "react";
import "./css/FilmContainer.css"
import ListFilm from "../../component/film/ListFilms";
import PaginationItem from "../../component/commun/PaginationItem";
import sentence from "../../constante/Constante";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import filmActions from "../../redux/film/actions";
import actions from "../../redux/film/actions";
function FilmContainer({films}){
    const {currentCategory,currentPagination,pageSize,filterdFilm} = useSelector(state => state.films)
    const dispatch = useDispatch()

    useEffect(()=>{
        updateFiltredListe()
    },[films, currentCategory])

    const updateFiltredListe = ()=>{
        let filterdList = films
        if(currentCategory !== undefined) {
            filterdList = films.filter(film => film.category === currentCategory)
        }
        dispatch(dispatchAction(actions.SET_FILTRED_LIST,{filterdList : filterdList}))
    }

    function onChangePagination (page,pageSize){
        dispatch(dispatchAction(actions.SET_PAGINATION_PARAMETERS,{page : page , pageSize : pageSize}))
    }
    return(
        <div className={"card_list_container bggrey botTopMar flex_column brd_box"}>
            <ListFilm films={filterdFilm}  pageSize={pageSize} currentPagination={currentPagination}/>
            <PaginationItem
                Current={currentPagination}
                total={ filterdFilm.length}
                defaultPageSize={pageSize}
                pageSizeOptions={sentence.pagination.pageSizeOption}
                showSizeChanger={true}
                onChange={onChangePagination}
            />
        </div>
    )
}

export default FilmContainer