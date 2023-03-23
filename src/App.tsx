import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import Accordion from "./components/Accordion";
import ControlledRating, {RatingValueType} from "./components/ControlledRating";
import UnControlledRating from "./components/UnControlledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff";
import ControlledOnOff from "./components/ControlledOnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledInput} from "./components/ControlledInput";
import {ControlledCheckBox} from "./components/ControlledCheckBox";
import {ControlledSelect} from "./components/ControlledSelect";



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
    let [switchOn, setSwitchOn] = useState<boolean>(true)
    return (

        <div className="App">
            <Accordion titleValue={'First acc'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

            <div className="Rating"> Controlled Rating <ControlledRating value={ratingValue} onClick={setRatingValue}/></div>
            <div className="Rating"> Uncontrolled <UnControlledRating /></div>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledInput />
            <ControlledInput />
            <ControlledCheckBox />
            <ControlledSelect/>
            {/*<ControlledOnOff value={switchOn} onChange={(switchOn)=>{setSwitchOn(switchOn)}}/>*/}
            {/*<FullInput addMessage={addMessage}/> Универсальный компонент - инпут + кнопка*/}
            {/*<div>*/}
            {/*    <p>Универсальный инпут + универсальная кнопка</p>*/}
            {/*    <Input setTitle={setTitle} title={title}/>*/}
            {/*    <Button callBack={callBackButtonHandler} name={'Press me'}/>*/}

            {/*</div>*/}
            {/*<div>*/}
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