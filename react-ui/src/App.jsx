import './App.css'
import React,{useEffect, useState, useRef} from 'react'

//useRef: 렌더링 이후에도 값이 그대로 남아있음. useState 이후 값이 렌더링되어 화면에 나타남.
//useState: 렌더링 이후 값 초기화.

function App() {
    const [renderer, setRenderer] = useState(0);
     const countRef = useRef(0);
     let countVar = 0;
  console.log(countRef);    //countRef.current 현재 값 확인
   const doRendering = () => {
    setRenderer(renderer + 1);
   }

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('ref: ', countRef.current);
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('var: ', countVar);
    };

    const printResults = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    }

  return (
    <div>
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>
        <button onClick={doRendering}>렌더!</button>
        <button onClick={increaseRef}>Ref 올려</button>
        <button onClick={increaseVar}>Var 올려</button>
        <button onClick={doRendering}>Ref Var 값 출력</button>
    </div>
  );
}

export default App
