import React, {useState} from 'react';
import s from "./OnOff.module.css"

type OnOffPropsType = {
    // value:boolean
}
const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [value, setValue] = useState(true)
    const onStyle = {
        width: "30px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: value ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: value ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: value ? "green" : "red"
    }

    return (
        <div className={s.onOff}>
            <div style={onStyle} onClick={()=>setValue(true)}>On</div>
            <div style={offStyle} onClick={()=>setValue(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;