import React, {useState} from 'react';


function generateData() {
    console.log('data generated')
    return 1
}

export const CounterUseState = () => {
    console.log('Counter rendered')
    const [count, setCount] = useState(generateData)
    //в начальное значение useState можно передать функцию, получим результат вызова этой фукции
    const countChanger = (state: number) => {
        return state + 1

    }
    return (
        <>
            <button onClick={() => setCount(countChanger)}>+</button>
            {/*так и в set мы можем передать функцию, если действия однотипны, так же получим результат ее вызова*/}
            <br/>
            {count}
        </>
    );
};

