import React, { useState } from "react";
import '../styles/firstCorp.css'
import schema from '../public/1corp2.png'

const FirstCorp = () =>{
    const [state,setState]= useState(0)
    function handleClickBack(){
        setState(0);
    }
    function handleClick1(){
        setState(1);
    }
    switch (state){
        case 0:
            return<>
                <button className="one" onClick={handleClick1}>1</button>
                <button className="two">2</button>
                <button className="three">3</button>
                <button className="four">4</button>
                <button className="five">5</button>
            </>
        case 1:
            return<>
            <button onClick={handleClickBack}>back</button>
            <img src={schema} alt="schema" />
            </>
    }
}

export default FirstCorp