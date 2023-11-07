import React from 'react';
import { StyledWrap } from './App.styled';
import { Searchbar } from './searchbar/Searchbar';
import { fetchImages } from '../services/api';
import { toast } from 'react-toastify';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';
import { Dna } from 'react-loader-spinner';

export default class App extends React.Component {
  state = {
    loading: false,
    error: null,
    images: [],
    q: '',
    per_page: 12,
    page: 1,
    isOpen: false,
    content: null,
    total: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { per_page, page, q } = this.state;

    if (prevState.page !== page || prevState.q !== q) {
      this.setState({ loading: true });

      try {
        const data = await fetchImages({ per_page, page, q });
        this.setState(prev => ({
          images: [...prev.images, ...data.hits],
          total: data.totalHits,
        }));
      } catch (error) {
        this.setState({ error: error.message }, () =>
          toast.error(error.message)
        );
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSetQuerry = q => {
    this.setState({ q, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = content => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
      content,
    }));
  };

  render() {
    const { images, isOpen, content, total, loading } = this.state;

    return (
      <StyledWrap>
        <Searchbar setQuerry={this.handleSetQuerry} />
        {loading && !images.length ? (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}

        {total > images.length ? (
          <Button onClick={this.handleLoadMore} />
        ) : null}
        {isOpen ? <Modal close={this.toggleModal} content={content} /> : null}
      </StyledWrap>
    );
  }
}
