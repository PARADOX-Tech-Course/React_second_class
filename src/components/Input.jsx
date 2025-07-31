import { useState,useRef } from "react";
import Log from "./Log"



function Input() {
    const [inp, setInp] = useState('');

    const inpRef = useRef(null);

        const focusInp = () => {
            inpRef.current.focus()
        }
    return (
        <div>
            <button onClick={focusInp}>포커스</button>
            <input  ref={inpRef} value={inp} onChange={(e) => { setInp(e.target.value) }}></input>
            <p>입력한 내용 : {inp}</p>
            <Log text={inp}/>
        </div>
    );
}

export default Input;