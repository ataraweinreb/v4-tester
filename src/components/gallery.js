import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';

const { colors, fontSizes, fonts } = theme;

const GalleryContainer = styled(Section)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 20px;

  /* Full screen grid layout with a maximum of 4 images per row */
  &.full-screen {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalImage = styled.img`
  display: block;
  max-width: 70%;
  max-height: 70%;
  width: auto;
  height: auto;
  margin-bottom: 20px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  z-index: 1000;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:before {
    content: '✕'; /* Unicode for 'X' */
    font-size: 24px;
    color: ${colors.black};
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${props => (props.left ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  z-index: 1000;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:before {
    content: ${props => (props.left ? '"\\276E"' : '"\\276F"')}; /* Unicode for arrows */
    font-size: 24px;
    color: ${colors.black};
  }
`;

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    {
      src: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/foodscan.gif',
      alt: 'Image from GitHub',
    },
    {
      src:
        'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/hero-image.fill.size_1248x702.v1630015811.png',
      alt: 'Image from GitHub',
    },
    {
      src:
        'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/80adc0e0-13f8-11eb-9edf-4af820128f22.jpeg',
      alt: 'Image from GitHub',
    },
    {
      src:
        'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/4bd456f1-bbc0-4c96-9a10-d626bd76141a.jpg',
      alt: 'Image from GitHub',
    },
    {
      src:
        'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/7BC97D2E-602E-45B8-AA90-DD27DE223B66.jpg',
      alt: 'Image from GitHub',
    },
    {
      src: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/IMG_5448.JPG',
      alt: 'Image from GitHub',
    },
    {
      src: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/IMG_5851.jpg',
      alt: 'Image from GitHub',
    },
    // Add more images as needed
  ];

  const openModal = index => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <GalleryContainer id="gallery">
      <Heading>Gallery</Heading>
      <ImageGrid className={selectedImageIndex !== null ? 'full-screen' : ''}>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} onClick={() => openModal(index)} />
        ))}
      </ImageGrid>

      {/* Modal for Expanded Image */}
      {selectedImageIndex !== null && (
        <ModalOverlay isOpen={selectedImageIndex !== null} onClick={closeModal}>
          <CloseButton onClick={closeModal} />
          <Arrow
            left
            onClick={e => {
              e.stopPropagation();
              showPrevImage();
            }}
          />
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalImage src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} />
          </ModalContent>
          <Arrow
            onClick={e => {
              e.stopPropagation();
              showNextImage();
            }}
          />
        </ModalOverlay>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
