import React, {Fragment, useEffect} from "react";
import "./css/App.css"
import Header from "../../component/commun/Header";
import Content from "../../component/commun/Content";
import MultiSelect from "../../component/commun/MultiSelect";
import FilmContainer from "./FilmContainer";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import filmActions from "../../redux/film/actions";
import {Space, Spin} from "antd";

function App(){
    const {loading,films} = useSelector(state => state.films)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(dispatchAction(filmActions.GET_FILMS))
    },[])
    return(
        <div className={"layout_container"}>
            <Header/>
            <Content>
                {
                    !loading && films.length!==0 ? (
                        <Fragment>
                                <div className={"category_select_container boxmargin"}>
                                    <MultiSelect/>
                                </div>
                                <FilmContainer films={films}/>
                        </Fragment>
                        ) : (
                        <Space>
                            <Spin size="large" />
                        </Space>
                    )
                }
            </Content>

        </div>
    )
}

export default App