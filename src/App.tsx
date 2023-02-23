import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";


function App() {
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
    return (

        <div>
            <Accordion titleValue={'First acc'} />
            <Rating value={1}/>
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