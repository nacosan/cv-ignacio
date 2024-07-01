import React from 'react';
import { cv } from './assets';
import Image from 'next/image';
import { CVContainer, CVTitle, IconsContainer, PDFViewerContainer, ImageAndIconsContainer } from './cv-online.styles';
import { Icon } from 'components/atoms/Icon';

export const CVOnlineView = () => {
  return (
    <CVContainer>
      <CVTitle>MI CV ONLINE</CVTitle>
      <PDFViewerContainer>
        <ImageAndIconsContainer>
          <Image src={cv} alt="Foto de CV" width={750} height={900} />
          <IconsContainer>
            <a href="https://www.instagram.com/1308nacho" target="_blank" rel="noopener noreferrer">
              <Icon name='instagram' size='S' />
            </a>
            <a href="https://www.linkedin.com/in/nachocorrales1308/" target="_blank" rel="noopener noreferrer">
              <Icon name='linkedin' size='S' />
            </a>
            <a href="mailto:nacosan@hotmail.com" target="_blank" rel="noopener noreferrer">
              <Icon name='mail' size='S' />
            </a>
          </IconsContainer>
        </ImageAndIconsContainer>
      </PDFViewerContainer>
    </CVContainer>
  );
};
