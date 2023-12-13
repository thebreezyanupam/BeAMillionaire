import useSound from "use-sound";
import { useEffect, useState } from "react"
import play from '../assets/play.mp3'
import wrong from '../assets/wrong.mp3'
import wait from '../assets/wait.mp3'

export default function Timer({setTimeRunOut, questionNumber}) {
    const [timer, setTimer] =useState(30);

    useEffect(()=>{
        if(timer === 0) return setTimeRunOut(true);
        const interval = setInterval(()=>{
            setTimer((prev) =>  prev - 1);
        },1000);
        return()=> clearInterval(interval);
    }, [setTimeRunOut, timer]);

    useEffect(()=>{
        setTimer(30);
    }, [questionNumber] )
  return timer;
  
}
