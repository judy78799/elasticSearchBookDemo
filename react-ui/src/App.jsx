import './App.css'
import React,{useEffect, useState} from 'react';
import Timer from './component/Timer';

function App() {
    const [showTimer, setShowTimer] = useState(false);
  return (
    <div><Timer/>
        <button>Toggle Timer</button>
    </div>
  );
}

export default App
