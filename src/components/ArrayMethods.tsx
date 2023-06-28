import React from 'react';

const arrayOfStrings = ['Hello', 'Hi', 'Apple', 'Pen', 'Computer', 'My name is Victoria']
const arrayOfNumbers = [1, 4, 7, 2, 7, 22, 99, -30, 0, 777]
export const ArrayMethods = () => {
    const filteredStrings = arrayOfStrings.filter(a => a === 'Apple')
    const mappedToUpperCase = arrayOfStrings.map(a => a.toUpperCase())
    return (
        <>
            <div>
                <h2>Initial arrays:</h2>
                <h3>Strings</h3> {arrayOfStrings.map(el=>(<span> {el} </span>))}
                <h3>Numbers</h3> {arrayOfNumbers.map(el=>(<span> {el} </span>))}
                <h3>Filter for Apple</h3> <span>{filteredStrings}</span>
                <h3>Map, toUpperCase</h3> {mappedToUpperCase.map(el=>(<span> {el} </span>))}

                <br/>
            </div>
        </>
    )
}

