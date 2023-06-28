import React, {useReducer} from "react";

type AccordionPropsType = {
    titleValue: string

}
const state = {
    collapsed: false
}
type ActionType = {
    type: string
}
const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
const reducer = (state: boolean, action: ActionType) => {

    switch (action.type) {
        case TOGGLE_COLLAPSED : return !state
        default: return state
    }
}

export const UncontrolledAccordion = React.memo((props: AccordionPropsType) => {
    let [collapsed, dispatch] = useReducer(reducer, state.collapsed)
    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type:'TOGGLE-COLLAPSED'})}/>
        {!collapsed && <AccordionBody/>}
    </div>
})

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}> - - - {props.title} - - - </h3>
    )
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}