"use client"
import { gsap } from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";

export const AnimatedCircleHandle = forwardRef((props, ref) => {
    const el = useRef<HTMLInputElement>(null);
    const delay = 0;
    
    useImperativeHandle(ref, () => {             
      
      // return our API
      return {
        moveTo(x:number, y:number) {
          gsap.to(el.current, { x, y, delay});
        }
      };
    }, []);
    
    return <div className="rounded-full w-5 h-5 bg-white pointer-events-none z-100" ref={el}></div>;
  });
  
AnimatedCircleHandle.displayName = "AnimatedCircleHandle";