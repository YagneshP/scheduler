import { useState } from "react";

const useVisualMode = (intial) => {
  const[mode, setMode] = useState(intial);
  const transition = (mode) => {
    setMode(mode);
  }
  return ({mode, transition});
}

export default  useVisualMode;