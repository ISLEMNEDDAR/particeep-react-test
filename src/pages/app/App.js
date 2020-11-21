import React from "react";
import "./css/App.css"
import Header from "../../component/commun/Header";
import Content from "../../component/commun/Content";
import MultiSelect from "../../component/commun/MultiSelect";
import FilmContainer from "./FilmContainer";

function App(){
    return(
        <div className={"layout_container"}>
            <Header/>
            <Content>
                <div className={"category_select_container boxmargin"}>
                    <MultiSelect/>
                </div>
                <FilmContainer/>
            </Content>
        </div>
    )
}

export default App