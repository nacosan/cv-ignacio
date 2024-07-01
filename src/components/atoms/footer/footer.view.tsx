// footer.view.tsx
import React from 'react';
import { FooterContainer, TextContainer, IconContainer } from './footer.styles';
import { Icon } from '../Icon';

export const FooterView: React.FC = () => {
  return (
    <FooterContainer>
      <TextContainer>
        © {new Date().getFullYear()} Ignacio Corrales Sánchez. Todos los derechos reservados.
      </TextContainer>
      <IconContainer>
        <a href="https://www.instagram.com/1308nacho" target="_blank" rel="noopener noreferrer">
          <Icon name='instagram' size='XS' />
        </a>
        <a href="https://www.linkedin.com/in/nachocorrales1308/" target="_blank" rel="noopener noreferrer">
          <Icon name='linkedin' size='XS' />
        </a>
        <a href="mailto:nacosan@hotmail.com" target="_blank" rel="noopener noreferrer">
          <Icon name='mail' size='XS' />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};
