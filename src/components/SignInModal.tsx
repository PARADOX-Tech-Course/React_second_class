import React, {useRef, useState} from 'react';
import ModalContainer, { inputStyle } from "./ModalContainer";

interface SignInModalProps {
    setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignInModal: React.FC<SignInModalProps> = ({setSignIn}: SignInModalProps) => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const check = () => {
        if(idRef.current?.value.length as number <= 0) {
            console.log(idRef.current?.value.length);
            idRef.current?.focus();
            setErrorMsg("id를 입력해주세요.");
            return;
        }
        else if(passwordRef.current?.value.length as number <= 0) {
            passwordRef.current?.focus();
            setErrorMsg("password를 입력해주세요.");
            return;
        }
        alert("성공");
        setSignIn(false);
    }
    return (
        <ModalContainer width={"20rem"} height={"14rem"}>
            <input type="text" name="ID" style={inputStyle} ref={idRef} />
            <input type="password" name="PASSWORD" style={inputStyle} ref={passwordRef} />
            <p>{errorMsg}</p>
            <div>
                <button onClick={check}>SignIn</button>
                <button onClick={()=>setSignIn(false)}>Close</button>
            </div>
        </ModalContainer>
    )
}

export default SignInModal;