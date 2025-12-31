import './App.css'
import React,{useEffect, useState, useRef} from 'react'

//useState는 화면 전체 렌더링을 진행. Ref 올린 후 State를 누르게 되면 값이 화면에 렌더링 되어서 나타남.

function App() {
    const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log(countRef);    //countRef.current 현재 값 확인
  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.curent);
  };
  return (
    <div>
        <p>State: {count}</p> <p>Ref: {countRef.current}</p> <button onClick={increaseCountState}>State 올려</button> <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default App
