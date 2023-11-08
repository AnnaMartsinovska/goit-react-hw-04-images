import React, { useEffect, useState } from 'react';
import { StyledWrap } from './App.styled';
import { Searchbar } from './searchbar/Searchbar';
import { fetchImages } from '../services/api';
import { toast } from 'react-toastify';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';
import { Dna } from 'react-loader-spinner';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [q, setQ] = useState('');
  const [per_page, setPer_page] = useState(12);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [total, setTotal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const data = await fetchImages({ per_page, page, q });
        setImages(prev => [...prev, ...data.hits]);
        setTotal(data.totalHits);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (page > 1 || q) {
      fetchData();
    }
  }, [page, q, per_page]);

  const handleSetQuerry = q => {
    setQ(q);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const toggleModal = content => {
    setIsOpen(prev => !prev);
    setContent(content);
  };

  return (
    <StyledWrap>
      <Searchbar setQuerry={handleSetQuerry} />
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
        <ImageGallery images={images} toggleModal={toggleModal} />
      )}

      {total > images.length ? <Button onClick={handleLoadMore} /> : null}
      {isOpen ? <Modal close={toggleModal} content={content} /> : null}
    </StyledWrap>
  );
};

const nothing = 56;
