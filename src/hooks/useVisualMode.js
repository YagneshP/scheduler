import { useState } from "react";

const useVisualMode = (intial) => {
  const[mode, setMode] = useState(intial);
  return ({mode});
}

export default  useVisualMode;