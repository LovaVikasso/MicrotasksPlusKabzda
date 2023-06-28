import React, {useState} from 'react';

const NewMessagesCounter = (props:{count:number})=>{
    console.log("MessagesCounter rendered")
    return <div>{props.count}</div>
}
const Users = React.memo((props:{users:Array<string>})=>{
    console.log("Users rendered")
    return <div>{
        props.users.map((u)=><div>{u}</div>)
    }</div>
})
// const Users = React.memo(SecretUsers) - либо создаем новый компонент на основе другого компонента
export const ReactMemoDemo = () => {
    const [counter,setCounter] = useState(0)
    const users = ['Victoria', 'Natalia', 'Milly', 'Lola']

    return (
        <div>
            <NewMessagesCounter count={counter} /> <button onClick={()=>setCounter(counter+1)}>+</button>
            <Users users={users} />
        {/* Юзерс не переренедерелись одновременно с мэссенджерами, потому что мэссенждеры в хоке реакт мемо */}
        </div>
    );
};

