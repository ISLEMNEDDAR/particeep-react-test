import React, {useEffect} from "react";
import "./css/FilmItem.css"
import {
    CloseOutlined,
    DeleteOutlined,
    DislikeFilled,
    DislikeOutlined,
    LikeFilled,
    LikeOutlined
} from '@ant-design/icons';
import Jauge from "../commun/Jauge";
import {Col} from "antd";
import color from "../../constante/Color";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import actions from "../../redux/film/actions";

function FilmItem({film}){
    //const {films} = useSelector(state => state.films)
    const dispatch = useDispatch()

    const deleteFilm = ()=>{
        dispatch(dispatchAction(actions.DELETE_FILM,{filmId : film.id}))
    }

    const renderLike = ()=>{
        return(
            <span>
                {film.like === true && film.like !== null? (<LikeFilled
                    className={"icon_app"}
                    onClick={() => {
                        dispatch(dispatchAction(actions.SET_LIKE,{filmId : film.id,like : null}))
                    }}
                />) : (
                    <LikeOutlined
                        className={"icon_app"}
                        onClick={() => {
                            dispatch(dispatchAction(actions.SET_LIKE,{filmId : film.id,like : true}))
                        }}
                    />)
                }
                </span>
        )
    }

    const renderDislike = ()=>{
        return(
            <span>
                { film.like === false && film.like !== null? (<DislikeFilled
                    className={"icon_app"}
                    onClick={() => {
                        dispatch(dispatchAction(actions.SET_LIKE,{filmId : film.id,like : null}))
                    }}
                />) : (
                    <DislikeOutlined
                        className={"icon_app"}
                        onClick={() => {
                            dispatch(dispatchAction(actions.SET_LIKE,{filmId : film.id,like : false}))
                        }}
                    />)
                }
                </span>
        )
    }

    return(
        <Col className="centerFlex flex_column " xs={24} sm={12} md={12} lg={6} xl={6}>
            <div className={"film_container flex_column bgwhite"}>
                <div className={"header_film_container flex_row"}>
                    <div className={"header_film_title_container"}>
                        <p >{film.title}</p>
                    </div>
                    <div className={"header_film_close"}>
                        <DeleteOutlined className={"trash_app"}  onClick={()=>{deleteFilm(film.id)}}/>
                    </div>
                </div>
                <div className={"content_film_container flex_row"}>
                    <div className={"content_film_category_container"}>
                        <p>{film.category}</p>
                    </div>
                    <div className={"content_film_jauge_container flex_row"}>
                        <Jauge icon={renderLike()} number={film.likes}/>
                        <Jauge icon={renderDislike()} number={film.dislikes}
                        />
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default FilmItem