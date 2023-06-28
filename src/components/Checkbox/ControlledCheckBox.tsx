import React, {ChangeEvent, useState} from "react";

export const ControlledCheckBox = React.memo(() => {
    const [parentValue, setParentValue] = useState(true)
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <div className="ControlledInput">
            <p>This is controlled checkbox, all the logic is here, delete paragraph later </p>
            <input type="checkbox"  checked={parentValue}  onChange={OnChangeHandler}/>
        </div>
    );
})