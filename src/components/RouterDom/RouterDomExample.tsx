import React from 'react';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

export const RouterDomExample = () => {
    return (
        <div>
            Inspect the code!
            <NavLink to={'/'}>main</NavLink> - - -
            <NavLink to={'/login'}>login</NavLink> - - -
            <NavLink to={'/profile'}>profile</NavLink> - - -
            <NavLink to={'/profile/settings'}>settings</NavLink> - - -

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                {/* после * может быть все что угодно, чего у нас еще нет, выведет на 404*/}
                {/* может быть использвоаан после гдургой страницы, н: /login/*   */}
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={(
                    <div>
                        profile
                        <Routes>
                            <Route path={'/settings'} element={<div>settings</div>} />
                            {/* здесь мы внутри */}
                        </Routes>
                    </div>
                )}/>
                <Route path={'/profile/*'} element={(
                    <div>
                        profile
                        <Outlet />
                        <Route path={'/profile/settings'} element={<div>settings</div>} />
                        <Route path={'settings'} element={<div>settings</div>} />
                        {/*второй способ вложенности. можно оба варианта*/}
                    </div>
                )}/>
            </Routes>
        </div>
    );
};
