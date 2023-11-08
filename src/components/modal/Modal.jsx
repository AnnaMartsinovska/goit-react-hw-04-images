import { StyledOverlay, StyledModal } from './Modal.styled';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';

export const Modal = ({ close, content }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
        toast.info('Modal closed by Escape');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [close]);

  const handleClickModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return (
    <StyledOverlay onClick={handleClickModal}>
      <StyledModal>
        <img key={content.id} src={content.largeImageURL} alt={content.tags} />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  close: propTypes.func.isRequired,
  content: propTypes.object.isRequired,
};
