import React, {useMemo, useState} from 'react';

const NewMessagesCounter = (props: { count: number }) => {
    console.log("MessagesCounter rendered")
    return <div>{props.count}</div>
}
const Users = React.memo((props: { users: Array<string> }) => {
    console.log("Users rendered")
    return <div>{
        props.users.map((u, i) => <div>{u}</div>)
    }</div>
})
// const Users = React.memo(SecretUsers) - либо создаем новый компонент на основе другого компонента
export const UseMemoWithReactMemoDemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Victoria', 'Natalia', 'Milly', 'Lola'])

    const newArray = useMemo(() => {
        const result = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return result
    }, [users])
    // метод фильтр создает новый массив, и соот-но новые данные
    // поэтому идет постоянная перерисовка
    // поэтому это результат выполнения функции засовываем в юзМемо
    // в массив зависимойстей засовываем юзеров, так как от него зависи фильтрация и результат функции
    return (
        <div>
            <NewMessagesCounter count={counter}/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Users users={newArray}/>
            {/* Юзерс не переренедерелись одновременно с мэссенджерами, потому что мэссенждеры в хоке реакт мемо */}
        </div>
    );
};


