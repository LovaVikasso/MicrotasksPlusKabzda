import React, {useState} from 'react';

type ItemType = {
    name: string
    id: number
}
type SelectPropsType = {
    items: Array<ItemType>
    value?: number
}

export const UncontrolledSelect = (props: SelectPropsType) => {
    const [title, setTitle] = useState("Choose option")
    let [collapsed, setCollapsed] = useState(true)
    const onClick = () => {
        setCollapsed(!collapsed)
    }
    const changeTitle = (name: string) => {
        setTitle(name); setCollapsed(!collapsed)
    }
    return (
        <div className="uncontrolledSelect">
            <h3 onClick={onClick}>{title}</h3>
            {!collapsed && props.items.map((i) => <li className="uncontrolledOption" key={i.id}
                                                      onClick={() => changeTitle(i.name) } >{i.name}</li>)

            }
        </div>
    );
};

