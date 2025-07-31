import React from 'react';
import ModalContainer, { inputStyle } from "./ModalContainer";

const SignInModal: React.FC = () => {

    return (
        <ModalContainer width={"20rem"} height={"10rem"}>
            <input type="text" name="ID" style={inputStyle} />
            <input type="password" name="PASSWORD" style={inputStyle} />
            <div>
                <button>SignIn</button>
                <button>Close</button>
            </div>
        </ModalContainer>
    )
}

export default SignInModal;