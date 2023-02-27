import React from 'react';
import s from "./OnOff.module.css"

type OnOffPropsType = {
    value: boolean
    onChange: (value:boolean) => void
}
const ControlledOnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: "30px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "3px",
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: props.value ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
    }

    return (
        <div className={s.onOff}>
            <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default ControlledOnOff;