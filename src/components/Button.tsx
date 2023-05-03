import React from "react";

type ButtonPropsType = {
    callBack:()=>void
    name:string
}
export const Button = React.memo((props:ButtonPropsType) => {
    const onClickHandler = ()=>{
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )

})