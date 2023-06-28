import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navigator.module.css'

export const Navigation = () => {
    return (
        <>
            <div>
                <div className={s.element}><NavLink className={s.link} to="/clock">Clock</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/accordion">Accordion</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/checkbox">CheckBox</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/onoff">On Off</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/counter">Counter with Use State</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/input">Input examples</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/rating">Rating</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/select">Select</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/routerdom">RouterDom Example</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/effect">UseEffect Example</NavLink></div>
                <div className={s.element}><NavLink className={s.link} to="/memo">UseMemo and ReactMemo Example</NavLink></div>

            </div>

        </>
    );
};

