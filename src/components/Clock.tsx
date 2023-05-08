import {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date()) //initial текущая дата
    const tick = () => {
        setDate(new Date());
    } //функция, что обновляет дату на текущую

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
            // вызывается при размонтировании компонента для очистки ресурсов (setInterval).
        };
    });

    return (
        <div>
            <h2>Дата: {date.toLocaleDateString()}</h2>
            <h3>Время: {date.toLocaleTimeString()}</h3>
        </div>
    )
}
