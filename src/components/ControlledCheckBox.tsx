import React, {ChangeEvent, useState} from "react";

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <div className="ControlledInput">
            <p>This is controlled checkbox, delete paragraph later </p>
            <input type="checkbox"  checked={parentValue}  onChange={OnChangeHandler}/>
        </div>
    );
};