import React, {useMemo, useState} from 'react';

export const UseMemoDemo = () => {

    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)


    //пишем циклы для факториала

    let resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            tempA = tempA * i
        }
        return tempA
    }, [a])

    let resultB = useMemo(() => {
        let tempB = 1
        for (let i = 1; i <=b; i++) {
            tempB = tempB * i
        }
        return tempB
    }, [b])


    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </div>
    );
};

