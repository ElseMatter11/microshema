import React from 'react'
import logo from '../public/logo.png'
import saerch from '../public/Searcher.svg'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/layout.css'

interface LayoutProps{
    children:React.ReactNode;
}


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Layout:React.FC<LayoutProps> = ({children}) => {
    const [value, onChange] = useState<Value>(new Date());
    return(
        <>
           <div className='cont-wraper'>
            <header className='head'>
                <img src={logo} alt='lasl'></img>
                <div className='seracher-wrapper'>
                <input className='inp'></input><button className='btn'> <img src={saerch} alt="asd" className='searcher'/></button></div>
            </header>
            <div className='main'>
                <Calendar onChange={onChange} value={value} className='calendar'/>
                <div className="cont-wraper1">
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}

export default Layout