import { useEffect } from 'react';
// import { PropTypes } from 'prop-types';
import { Backdrop, Overlay, ModalWindow } from './Modal.styled';

const Modal = ({onClose,children}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
      <Backdrop>     
      <Overlay onClick={handleClose}>
        <ModalWindow>                  
          <div>{children}</div>
        </ModalWindow>
        </Overlay>  
     </Backdrop>  
  );
};

// Modal.propTypes = {   
//   onClose:PropTypes.func.isRequired,    
// }

export default Modal;