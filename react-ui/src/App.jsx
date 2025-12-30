import './App.css'
import {useEffect, useState} from 'react';

const heavyWork = () => {
    console.log("엄청 무거운 작업!!!");
    return ["홍길동", "김민수"];
}
function App() {
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleUpload = () => {
        setNames((prevState) => {   //함수형 업데이트, prevState는 React가 자동으로 전달하는 이전 상태 값
            console.log('이전 state', prevState);
            return [input, ...prevState];
        });
    };
    console.log(input);


  return (
    <div>
        <input type="text" value={input} onChange={handleInputChange}/>
        <button onClick={handleUpload}>Upload</button>
        {names.map((name, idx) => {
            return <p key={idx}>{name + idx}</p>
        })}

    </div>

  )
}

export default App
