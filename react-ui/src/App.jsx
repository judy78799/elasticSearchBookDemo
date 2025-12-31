import './App.css'
import React,{useEffect, useState} from 'react';
import Timer from './component/Timer.jsx';

function App() {
    const [showTimer, setShowTimer] = useState(false);
  return (
    <div>{showTimer && <Timer/>}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App
