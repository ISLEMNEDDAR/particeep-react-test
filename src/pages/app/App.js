import React, {useEffect} from "react";
import "./css/App.css"
import Header from "../../component/commun/Header";
import Content from "../../component/commun/Content";
import MultiSelect from "../../component/commun/MultiSelect";
import FilmContainer from "./FilmContainer";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import filmActions from "../../redux/film/actions";

function App(){
    const {loading,films} = useSelector(state => state.films)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(dispatchAction(filmActions.GET_FILMS))
    },[])
    return(
        <div className={"layout_container"}>
            <Header/>
            {!loading && films.length!==0?  (<Content>
                <div className={"category_select_container boxmargin"}>
                    <MultiSelect/>
                </div>
                <FilmContainer/>
            </Content>) : (
                <div></div>
                )}
        </div>
    )
}

export default App