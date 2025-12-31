import './App.css'
import React, {useEffect, useState, useRef, use} from 'react'

//useRef: 렌더링 이후에도 값이 그대로 남아있음. useState 이후 값이 렌더링되어 화면에 나타남.
//useState: 렌더링 이후 값 초기화.

function App() {
    const inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef);
    },[]); //한번만 실행

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`);
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username"/>
            <button>로그인</button>
        </div>
    );
};

export default App;
