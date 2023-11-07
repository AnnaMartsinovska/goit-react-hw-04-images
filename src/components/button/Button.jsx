import { StyledButton } from './Button.styled';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
