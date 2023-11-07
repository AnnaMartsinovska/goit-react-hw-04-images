import React from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledFormButton,
  StyledButtonLabel,
  StyledInput,
} from './Searchbar.styled';
import propTypes from 'prop-types';

export class Searchbar extends React.Component {
  static = {
    setQuerry: propTypes.func.isRequired,
  };

  state = {
    searchStr: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.setQuerry(this.state.searchStr);
    this.setState({ searchStr: '' });
  };

  handleInputChange = e => {
    this.setState({ searchStr: e.target.value });
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleFormSubmit}>
          <StyledFormButton type="submit">
            <StyledButtonLabel>Search</StyledButtonLabel>
          </StyledFormButton>

          <StyledInput
            type="text"
            placeholder="Search images and photos"
            value={this.state.searchStr}
            onChange={this.handleInputChange}
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}
