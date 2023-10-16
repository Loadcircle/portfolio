"use client"
import React, { useEffect, useRef } from 'react'
import { AnimatedCircleHandle } from './AnimatedCircleHandle'

type CircleRefType = {
    moveTo: (x: number, y: number) => void;
};

export const AnimatedCircle = () => {
    const circleRef = useRef<CircleRefType>(null);
         
    useEffect(() => {    
        //set to center screen
        const { innerWidth, innerHeight } = window;
        circleRef.current?.moveTo(innerWidth / 2, innerHeight / 2);
        
        const onMove = ({ pageX, pageY }: PointerEvent) => {      
            circleRef.current?.moveTo(pageX, pageY);
        };
        
        window.addEventListener("pointermove", onMove);
    
        return () => {
            window.removeEventListener("pointermove", onMove);
        }

    }, []);
      
    return (
        <div className='absolute -top-2 -left-2'>
            <AnimatedCircleHandle ref={circleRef}/>
        </div>
    )
}
