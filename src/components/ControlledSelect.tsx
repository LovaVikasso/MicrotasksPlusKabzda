import React, {ChangeEvent, useState} from "react";

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const OnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div className="ControlledSelect">
            <select value={parentValue} onChange={OnChangeHandler}>
                <option>None</option>
                <option value={"1"}>HTML</option>
                <option value={"2"}>CSS</option>
                <option value={"3"}>React</option>
            </select>
        </div>
    );
};