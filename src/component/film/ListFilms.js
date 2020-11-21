import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import filmActions from "../../redux/film/actions"
import {dispatchAction} from "../../services/utils/function.service";
import FilmItem from "./FilmItem";
import "./css/ListFilm.css"
import {Row,Spin,Space } from "antd";

function ListFilm(){
    const {films} = useSelector(state => state.films)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(dispatchAction(filmActions.GET_FILMS))
    },[])

    useEffect(()=>{
        console.log(films)
    },[films])

    return(
        <Row className={"list_film_container"}>
            {films.map((film,index)=>(
                <FilmItem key={film.id} film={film}/>
            ))}
        </Row>

    )
}
export default ListFilm