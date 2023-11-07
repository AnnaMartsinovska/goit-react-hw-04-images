import { StyledOverlay, StyledModal } from './Modal.styled';
import React from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';

export class Modal extends React.Component {
  static = {
    close: propTypes.func.isRequired,
    content: propTypes.object.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
      toast.info('Modal closed by Escape');
    }
  };

  handleClickModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.close();
    }
  };

  render() {
    const { content } = this.props;
    return (
      <StyledOverlay onClick={this.handleClickModal}>
        <StyledModal>
          <img
            key={content.id}
            src={content.largeImageURL}
            alt={content.tags}
          />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
