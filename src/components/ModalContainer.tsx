import React from 'react';

interface ModalContainerProps {
    width: string | number,
    height: string | number
}
const ModalContainer: React.FC<ModalContainerProps> = ({width, height}: ModalContainerProps) => {
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
    }
    return (
        <div style={modalStyle}>

        </div>
    )
}

export default ModalContainer