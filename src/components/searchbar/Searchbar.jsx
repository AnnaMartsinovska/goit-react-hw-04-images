import React, { useState } from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledFormButton,
  StyledButtonLabel,
  StyledInput,
} from './Searchbar.styled';
import propTypes from 'prop-types';

export const Searchbar = ({ setQuerry }) => {
  const [searchStr, setSearchStr] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    setQuerry(searchStr);
    setSearchStr('');
  };

  const handleInputChange = e => {
    setSearchStr(e.target.value);
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledFormButton type="submit">
          <StyledButtonLabel>Search</StyledButtonLabel>
        </StyledFormButton>

        <StyledInput
          type="text"
          placeholder="Search images and photos"
          value={searchStr}
          onChange={handleInputChange}
        />
      </StyledForm>
    </StyledHeader>
  );
};

Searchbar.propTypes = {
  setQuerry: propTypes.func.isRequired,
};
