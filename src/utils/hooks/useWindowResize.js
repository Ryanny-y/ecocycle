import { useEffect } from "react";

export function useWindowResize() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log('resized');
    }
    
    window.addEventListener('resize', resizeEventHandler);

    return (() => {
      console.log('Removed');
      
      window.removeEventListener('resize', resizeEventHandler)
    })
  }, [])
}