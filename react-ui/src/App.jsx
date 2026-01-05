import './App.css'
import React, {useEffect, useState, useRef} from 'react'
import ShowSum from "./component/ShowSum.jsx";

//useRef: 렌더링 이후에도 값이 그대로 남아있음. useState 이후 값이 렌더링되어 화면에 나타남.
//useState: 렌더링 이후 값 초기화.

function App() {
    const inputRef = useRef();  //컴포넌트 최상위에서 훅 호출 -> 컴포넌트가 렌더링 될 때마다 동일한 순서로 Hook이 호출되는 것을 보장함.

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
            <button onClick={login}>로그인</button>
            <h1>합계 표시</h1>
            <ShowSum label="합계" n={10} />
        </div>
    );
};

export default App;
