import './App.css'
import {useEffect, useState} from 'react';

function App() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1)
    }
    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    useEffect(() => {
      console.log('name 변화');

    },[name]);

    //마운트( 처음 렌더링 될 때) + count 변화 될 때
    useEffect(() => {
        console.log('count 변화');
    },[count]); //dependency array -> 맨 처음 렌더링 , count 만 변경 되었을 때 렌더링
  return (
    <div> <button onClick={handleCountUpdate}> Update </button> <span> count  {count} </span>
        <input type="text" value={name} onChange={handleInputChange}/>
        <span>name: {name}</span>
    </div>

  )
}

export default App
