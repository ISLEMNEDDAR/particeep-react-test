import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import filmActions from "../../redux/film/actions"
import {dispatchAction} from "../../services/utils/function.service";
import FilmItem from "./FilmItem";
import "./css/ListFilm.css"
import {Row,Spin,Space } from "antd";

function ListFilm(){
    const {films,currentCategory} = useSelector(state => state.films)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(dispatchAction(filmActions.GET_FILMS))
    },[])

    useEffect(()=>{
        console.log(films)
    },[films])

    const renderListFilm = (Listfilms,currentCateg)=>{
        return (
            <Fragment>
                { currentCateg === undefined ? (
                    <Fragment>
                        {Listfilms.map((film,index)=>(<FilmItem key={film.id} film={film}/>))}
                    </Fragment>
                ) : (
                    <Fragment>
                        {Listfilms.filter(film => film.category === currentCateg).map((film,index)=>(<FilmItem key={film.id} film={film}/>))}
                    </Fragment>
                )}
            </Fragment>
        )
    }

    return(
        <Row className={"list_film_container"}>
            {renderListFilm(films,currentCategory)}
        </Row>

    )
}
export default ListFilm