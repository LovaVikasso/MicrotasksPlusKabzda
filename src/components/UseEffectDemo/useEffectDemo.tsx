import React, {useEffect, useState} from 'react';

export const UseEffectDemo = () => {
    const [counter,setCounter] = useState<number>(0)
    const [counter1,setCounter1] = useState<number>(0)
    console.log('component rendered')

    useEffect(()=>{
        console.log('useEffect render whet component rendered')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('useEffect render when counter changed')
        document.title = counter.toString()
    },[counter])

    useEffect(()=>{
        console.log('useEffect only when component did mount (first time)')
        document.title = counter.toString()
    },[])

    useEffect(()=>{
        console.log('useEffect setTimeOut через 1 секунду')
       setTimeout(()=>{
           setCounter1(counter1+1)
       },1000)

    },)
    useEffect(()=>{
        console.log('useEffect setInterval каждую секунду 1 секунду')
        setInterval(()=>{
            setCounter1(counter1+1)
        },1000)

    },[counter])
    return (
        <div>
            Hello, {counter}
            <br />
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <br />
            Hi, {counter1}
        </div>
    );
};

