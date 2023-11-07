import { StyledImages } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ toggleModal, images = [] }) => {
  return (
    <StyledImages>
      {images.map(image => (
        <ImageGalleryItem toggleModal={toggleModal} key={image.id} {...image} />
      ))}
    </StyledImages>
  );
};

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  toggleModal: propTypes.func.isRequired,
};
