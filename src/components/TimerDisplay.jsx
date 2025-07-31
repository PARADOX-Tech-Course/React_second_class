import {useRef, useEffect} from "react";

export default function TimerDisplay({time}){
    const timeRef = useRef(null);
    useEffect(()=>{
        const timeText = `${String(Math.floor(time / 60)).padStart(2, '0')} : ${String(Math.floor(time%60)).padStart(2, '0')}`;
        if(timeRef.current)
            timeRef.current.textContent = timeText;
    }, [time]);
    return (
        <>
            <h1>🍅뽀모도로 타이머🍅</h1>
            <h2 ref={timeRef}>00 : 00</h2>
        </>
    );
}