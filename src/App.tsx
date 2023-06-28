import React from 'react';
import './App.css';
import {Navigation} from "./components/Navigator/Navigation";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Clock} from "./components/Clock/Clock";
import {AccordionContainer} from "./components/Accordion/AccordionContainer";
import {ControlledCheckBox} from "./components/Checkbox/ControlledCheckBox";
import {OnOffContainer} from "./components/OnOff/OnOffContainer";
import {CounterUseState} from "./components/CounterUseState/CounterUseState";
import {InputContainer} from "./components/Input/InputContainer";
import {RatingContainer} from "./components/Rating/RatingContainer";
import {SelectContainer} from "./components/Select/SelectContainer";
import {RouterDomExample} from "./components/RouterDom/RouterDomExample";
import {UseEffectDemo} from "./components/UseEffectDemo/useEffectDemo";
import {MemoContainer} from "./components/Memo/MemoContainer";
import {LocalStorageDemo} from "./components/LocalStorage/LocalStorageDemo";
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Navigation/>}/>
                    <Route path='/clock' element={<Clock/>}/>
                    <Route path='/accordion' element={<AccordionContainer/>}/>
                    <Route path='/checkbox' element={<ControlledCheckBox/>}/>
                    <Route path='/onoff' element={<OnOffContainer/>}/>
                    <Route path='/counter' element={<CounterUseState/>}/>
                    <Route path='/input' element={<InputContainer/>}/>
                    <Route path='/rating' element={<RatingContainer/>}/>
                    <Route path='/select' element={<SelectContainer/>}/>
                    <Route path='/routerdom' element={<RouterDomExample/>}/>
                    <Route path='/effect' element={<UseEffectDemo/>}/>
                    <Route path='/memo' element={<MemoContainer/>}/>
                    <Route path='/localstorage' element={<LocalStorageDemo/>}/>


                    <Route path={'/404'} element={<h1>Page not found</h1>}/>
                    <Route path='*' element={<Navigate to={'/404'}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;