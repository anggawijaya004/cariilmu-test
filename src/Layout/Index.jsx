import React, { useEffect } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function Layout() {
    return (
        <>
            <NavBar />
            <SideBar />
            <div className='main'>
                <Outlet />
            </div>
        </>
    );
}
