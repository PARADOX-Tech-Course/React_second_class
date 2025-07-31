export default function TimerControls({mods, start, timerOn, changeMods}){
    return(
        <>
            <button onClick={timerOn}>{start?'멈추기':'시작하기'}</button>
            <button onClick={changeMods}>{mods?'공부 📓':'휴식 🎈'}</button>
        </>
    )
}