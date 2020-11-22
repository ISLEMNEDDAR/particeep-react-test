import React from "react";
import "./css/MultiSelect.css"
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import sentence from "../../constante/Constante";
import {dispatchAction} from "../../services/utils/function.service";
import actions from "../../redux/film/actions";
const {Option} = Select
function MultiSelect(){
    const {categories,currentCategory} = useSelector(state => state.films)
    const dispatch = useDispatch()
    function handleChange(value) {
        console.log(`selected ${value}`);
        dispatch(dispatchAction(actions.SET_CURRENT_CATEGORY,{value}))
    }
    return(
        <div className={"container-multiselect bgwhite brd_box fullh flex_column centerFlex"}>
            <Select
                placeholder={sentence.multiselect.default}
                style={{ width: "95%",borderRadius : 20 }}
                onChange={handleChange}
                bordered={false}
                allowClear
                value={currentCategory}
            >
                {categories.map((category,index) => (
                    <Option key={index} value={category} >{category}</Option>
                ))}
            </Select>
        </div>
    )
}

export default MultiSelect