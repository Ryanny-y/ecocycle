import { useEffect, useState } from "react";

export default function useWindowResize() {

  const [ windowSize, setWindowSize ] = useState(window.innerWidth);

  useEffect(() => {
    const resizeEventHandler = (e) => {
      setWindowSize(window.innerWidth)
    }
    
    window.addEventListener('resize', resizeEventHandler);

    return (() => {
      window.removeEventListener('resize', resizeEventHandler)
    })
  }, [])

  return windowSize;
}