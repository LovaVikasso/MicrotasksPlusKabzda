import React, {useRef, useState} from 'react';
//используем ref
export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)// с помощью хука создаем ссылку на элемент
    const save = () =>{
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)//меняем value на текущее значение
    }
    return (
        <div>
            <input ref={inputRef} /> <button onClick={save}>Save </button> - actual value: {value}
        {/* в инпуте привязываем ссылку, к которой обращаемся в save  */}
        </div>
    );
};
