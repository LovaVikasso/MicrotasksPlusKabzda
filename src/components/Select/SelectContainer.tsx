import React from 'react';
import {ControlledSelect} from "./ControlledSelect";
import {UncontrolledSelect} from "./UncontrolledSelect";

export const SelectContainer = () => {
    const selectItems = [
        {name: "Option", id:1},
        {name: "Another option", id:2},
        {name: "Choice", id:3},
    ]
    return (
        <div>
            Controlled Select <ControlledSelect/>
            UnControlled Select <UncontrolledSelect items={selectItems} />
        </div>
    );
};