import { useState } from "react";

const useVisualMode = (intial) => {
  const[mode, setMode] = useState(intial);
  const[history, setHistory] = useState([intial]);
  const transition = (mode, opt) => {
    if(opt) {
      setHistory([intial]);
    }
    setMode(mode);
    //1.add mode to history array
    setHistory(prev => [...prev, mode]); 
  }
  const back = () => {
    //2. setMode to previouse item of historyArray
    if(history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(prev => {
        let newHistory = [...prev];
        newHistory.pop();
        return newHistory;
      });
    } else {
      setMode(intial);
      setHistory([intial]);
    }
  
  }
  return ({mode, transition, back});
}

export default  useVisualMode;