"use client"
import React, { useEffect, useRef } from 'react'
import { AnimatedCircleHandle } from './AnimatedCircleHandle'
import { isAnchorOrButton } from '../helpers/helpers';

type CircleRefType = {
    moveTo: (x: number, y: number) => void;
    scaleTo: (val: 1 | 2) => void;
};

export const AnimatedCircle = () => {
    const circleRef = useRef<CircleRefType>(null);
         
    useEffect(() => {    
        //set to center screen
        const { innerWidth, innerHeight } = window;
        circleRef.current?.moveTo(innerWidth / 2, innerHeight / 2);
        
        const onMove = ({ pageX, pageY }: PointerEvent) => {      
            circleRef.current?.moveTo(pageX, pageY);
            const elementUnderPointer = document.elementFromPoint(pageX, pageY);
            
            if(isAnchorOrButton(elementUnderPointer)){
                circleRef.current?.scaleTo(2);
            }else{
                circleRef.current?.scaleTo(1);
            }
            //check if elemente a anchor or button
            
        };
        
        window.addEventListener("pointermove", onMove);
    
        return () => {
            window.removeEventListener("pointermove", onMove);
        }

    }, []);
      
    return (
        <div className='absolute -top-2 -left-2 z-30'>
            <AnimatedCircleHandle ref={circleRef}/>
        </div>
    )
}
