import React from "react";
import "./css/PaginationItem.css"
import {Pagination} from "antd";
function PaginationItem({defaultCurrent,total,defaultPageSize,pageSizeOptions,showSizeChanger,onChange}){
    return(
        <div className={"card_pagination_container flex_column centerFlex"}>
            <Pagination defaultCurrent = {1}
                        total={total}
                        defaultPageSize={defaultPageSize}
                        pageSizeOptions={pageSizeOptions}
                        showSizeChanger={showSizeChanger}
                        onChange={(page,pageSize)=>{
                            onChange(page,pageSize)
                        }}
            />
        </div>
    )
}

export default PaginationItem

