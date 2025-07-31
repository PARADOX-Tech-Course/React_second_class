import { useState,useEffect } from 'react';

function Log({ text }) {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        if (texts.length > 0) {
            console.log("추가됨");
        }
    }, [texts])
    const handleAdd = () => {
        setTexts([...texts, text]); 
    };
    return (
        <div>
            <button onClick={handleAdd}>기록 추가</button>
            <p>목록: {texts.join(', ')}</p>
        </div>
    );
}

export default Log;
