import React from 'react';

const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "2rem",
}
interface ModalContainerProps {
    width: string | number,
    height: string | number,
    children?: React.ReactNode,
}
const ModalContainer: React.FC<ModalContainerProps> = ({width, height, children}: ModalContainerProps) => {
    const modalStyle: React.CSSProperties = {
        width: width,
        height: height,
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        backgroundColor: 'white',
        border: '1px solid #777',
        borderRadius: '2rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }
    return (
        <div style={modalStyle}>
            {children}
        </div>
    )
}

export default ModalContainer
export { inputStyle }