import React, {useState} from 'react';

type ItemType= {
    title:string
    value:any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
    items:Array<ItemType>
    onItemClick:(value:any)=>void
   // items:string[]
    // collapsed?:boolean
}


const Accordion = (props: AccordionPropsType) => {
    //let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>

            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onItemClick}/>}
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
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

type AccordionBodyPropsType = {
    items:Array<ItemType>
    onClick:(value:any)=>void
}
const AccordionBody = (props:AccordionBodyPropsType) => {
    return (
        <div>
            <ul>
                {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}}key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}
export default Accordion;