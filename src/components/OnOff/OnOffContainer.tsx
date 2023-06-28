import React, {useState} from 'react';
import ControlledOnOff from "./ControlledOnOff";
import UncontrolledOnOff from "./UncontrolledOnOff";

export const OnOffContainer = () => {
    const [switchOn1, setSwitchOn1] = useState<boolean>(true)
    const [switchOn2, setSwitchOn2] = useState<boolean>(true)

    const onChange1 = (switchOn:boolean)=> setSwitchOn1(switchOn)
    const onChange2 = (switchOn:boolean)=> setSwitchOn2(switchOn)
    return (
        <>
            Controlled OnOff <ControlledOnOff value={switchOn1} onChange={onChange1} />
            UnControlled OnOff <UncontrolledOnOff onChange={onChange2} /> {switchOn2.toString()}
        </>
    )
}