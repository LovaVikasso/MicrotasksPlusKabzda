import React from 'react';
import {ReactMemoDemo} from "./ReactMemoDemo";
import {UseMemoDemo} from "./UseMemoDemo";
import {UseMemoWithReactMemoDemo} from "./UseMemoWithReactMemoDemo";
import s from './MemoContainer.module.css'

export const MemoContainer = () => {
    return (
        <div>
            Inspect code!
            <div className={s.block}> React Memo <ReactMemoDemo/></div>
            <div className={s.block}> UseMemo <UseMemoDemo/></div>
            <div className={s.block}> UseMemo with ReactMemo <UseMemoWithReactMemoDemo/></div>
        </div>
    )
}