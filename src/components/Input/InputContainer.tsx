import React, {useState} from 'react';
import {Input} from "./Input";
import {UncontrolledInput} from "./UncontrolledInput";
import {FullInput} from "./FullInput";
import {Button} from "../Button";
import s from './InputContainer.module.css'

export const InputContainer = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'}
    ])
    let [title, setTitle] = useState('')
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <>
            <div className={s.block}>
                Controlled Input <Input title={title} setTitle={setTitle}/>
                Universal Button <Button callBack={callBackButtonHandler} name={'Press me'}/>
            </div>
            <div className={s.block}>
                UnControlled Input <UncontrolledInput/>
            </div>
            <div className={s.block}>
                Full input <FullInput addMessage={addMessage}/>
            </div>
            <div className={s.block}>
                <p>Results you see in array:</p>
                {message.map((el, index) => {
                    return (
                        <div key={index}> {el.message} </div>
                    )
                })}
            </div>
        </>
    );
};

