import React, {useRef, useState} from 'react';
import ModalContainer, { inputStyle } from "./ModalContainer";

interface SignUpModalProps {
    setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignUpModal: React.FC<SignUpModalProps> = ({setSignUp}: SignUpModalProps) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const check = () => {
        if(nameRef.current?.value.length as number <= 0) {
            idRef.current?.focus();
            setErrorMsg("name를 입력해주세요.");
            return;
        }
        if(idRef.current?.value.length as number <= 0) {
            idRef.current?.focus();
            setErrorMsg("id를 입력해주세요.");
            return;
        }
        else if(passwordRef.current?.value.length as number <= 0) {
            passwordRef.current?.focus();
            setErrorMsg("password를 입력해주세요.");
            return;
        }
        alert("SignUp 성공");
        setSignUp(false);
    }
    return (
        <ModalContainer width={"20rem"} height={"14rem"}>
            <input type="text" name="NAME" style={inputStyle} ref={nameRef} />
            <input type="text" name="ID" style={inputStyle} ref={idRef} />
            <input type="password" name="PASSWORD" style={inputStyle} ref={passwordRef} />
            <p>{errorMsg}</p>
            <div>
                <button onClick={check}>SignUp</button>
                <button onClick={()=>setSignUp(false)}>Close</button>
            </div>
        </ModalContainer>
    )
}

export default SignUpModal;