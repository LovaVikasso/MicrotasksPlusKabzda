import React, {useState} from 'react';

export const LocalStorageDemo = () => {
    const [count, setCount] = useState(0)
    const incCount = () => setCount(count + 1)
    const setData = () => localStorage.setItem('count', JSON.stringify(count))
    const getData = () => {
        let data = localStorage.getItem('count')
        if (data) setCount(JSON.parse(data))
    }
    const clearData = () => localStorage.clear()

    return (
        <div >
            <div>
                {count}
            </div>
            <div>
                <button onClick={incCount}>+</button>
                <button onClick={setData}>Set to Local Storage</button>
                <button onClick={getData}>Get from Local Storage</button>
                <button onClick={clearData}>Clear from Local Storage</button>
               <p>To check Inspect - Application</p>
            </div>
        </div>
    )
}