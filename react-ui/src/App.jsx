import './App.css'
import React,{useEffect, useState, useRef} from 'react'

//useRef: 렌더링 이후에도 값이 그대로 남아있음. useState 이후 값이 렌더링되어 화면에 나타남.
//useState: 렌더링 이후 값 초기화.

function App() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    //[error case]: 무한 렌더링 발생 useEffect -> setRenderCount 업데이트 -> useEffect 무한 반복
    // useEffect(() => {
    //     console.log('렌더링!');
    //     setRenderCount(renderCount + 1);
    // });

    useEffect(() => {
    // 화면 최초 렌더링
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수: ', renderCount.current);
    })

    return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    );
};

export default App;
