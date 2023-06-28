import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = React.memo(() => {
    const [parentValue, setParentValue] = useState("")
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div className="ControlledInput">
            <input value={parentValue} onChange={OnChangeHandler}/>
        </div>
    );
})



