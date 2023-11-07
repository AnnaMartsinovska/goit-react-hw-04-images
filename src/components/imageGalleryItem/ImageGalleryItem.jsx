import { StyledItem, StyledImage } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  toggleModal,
  tags,
  largeImageURL,
}) => {
  return (
    <StyledItem onClick={() => toggleModal({ id, largeImageURL, tags })}>
      <StyledImage src={webformatURL} alt={tags} />
    </StyledItem>
  );
};

ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  webformatURL: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
  tags: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
};
