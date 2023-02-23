type ButtonPropsType = {
    callBack:()=>void
    name:string
}
export const Button = (props:ButtonPropsType) => {
    const onClickHandler = ()=>{
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )

}