import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import Accordion from "./components/Accordion";
import ControlledRating, {RatingValueType} from "./components/ControlledRating";
// import UncontrolledRating from "./components/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff";
import ControlledOnOff from "./components/ControlledOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledInput} from "./components/ControlledInput";
import {ControlledCheckBox} from "./components/ControlledCheckBox";
import {ControlledSelect} from "./components/ControlledSelect";
import {UncontrolledSelect} from "./components/UncontrolledSelect";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {ReactMemoDemo} from "./components/ReactMemoDemo";


const App = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'}
    ])
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    let [title, setTitle] = useState('')
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    const [selectCollapsed, setSelectCollapsed] = useState(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)
    const onChangeSelect = ()=>{setSelectCollapsed(!selectCollapsed)}

    const selectItems = [
        {name: "Option", id:1},
        {name: "Another option", id:2},
        {name: "Choice", id:3},
    ]
    return (

        <div className="App">
            <ReactMemoDemo />
            {/*<UncontrolledAccordion titleValue={"UncontrolledAccordion with useReducer"} />*/}
            {/*<Accordion titleValue={'First acc'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*           items={[*/}
            {/*               {title: "1", value: 1},*/}
            {/*               {title: "2", value: 2},*/}
            {/*               {title: "Hello", value: 3},*/}
            {/*               {title: "Hi", value: 5}]}*/}
            {/*           onItemClick={(value) => alert(`Item with ID ${value} clicked`)}/>*/}
            {/*<UncontrolledSelect items={selectItems} />*/}
            {/*<div className="Rating"> Controlled Rating <ControlledRating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*</div>*/}
            {/*<div className="Rating"> Uncontrolled <UncontrolledRating/></div>*/}

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledInput/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckBox/>*/}
            {/*<ControlledSelect/>*/}
            {/*<ControlledOnOff value={switchOn} onChange={(switchOn) => {*/}
            {/*    setSwitchOn(switchOn)*/}
            {/*}}/>*/}
            {/*<FullInput addMessage={addMessage}/> Универсальный компонент - инпут + кнопка*/}
            {/*<div>*/}
            {/*    <p>Универсальный инпут + универсальная кнопка</p>*/}
            {/*    <Input setTitle={setTitle} title={title}/>*/}
            {/*    <Button callBack={callBackButtonHandler} name={'Press me'}/>*/}

            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>Работа с мапом</p>*/}
            {/*    {message.map((el, index) => {*/}
            {/*        return (*/}
            {/*            <div key={index}> {el.message} </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}

export default App;