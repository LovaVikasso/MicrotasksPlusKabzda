import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
    // collapsed?:boolean
}
const Accordion = (props: AccordionPropsType) => {
    //let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
    //collapsed:boolean
    //setCollapsed:(collapsed:boolean)=>void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.onChange}>{props.title}</h3>


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