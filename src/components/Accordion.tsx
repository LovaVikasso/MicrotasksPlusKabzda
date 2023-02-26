import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    // collapsed?:boolean
}
const Accordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue}  onClick={()=>{setCollapsed(!collapsed)}}/>
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
    //collapsed:boolean
    //setCollapsed:(collapsed:boolean)=>void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>


}
const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
export default Accordion;