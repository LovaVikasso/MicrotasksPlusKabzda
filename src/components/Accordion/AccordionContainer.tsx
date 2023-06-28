import React, {useState} from 'react';
import Accordion from "./Accordion";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export const AccordionContainer = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    const onChangeHandler = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }
    const onItemClick = (value:number) => alert(`Item with ID ${value} clicked`)
    const items = [
        {title: "1", value: 1},
        {title: "2", value: 2},
        {title: "Hello", value: 3},
        {title: "Hi", value: 5}]

    return (
        <>
        <Accordion
            titleValue={'Controlled accordion'}
            collapsed={accordionCollapsed}
            onChange={onChangeHandler}
            items={items}
            onItemClick={onItemClick}/>

            <UncontrolledAccordion  titleValue={'Uncontrolled accordion'}/>
        </>

    );
};

