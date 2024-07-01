// FullWidthYellowBar.styles.ts
import styled from 'styled-components';

export const YellowBar = styled.div<{ marginLeft?: string }>`
  background-color: #ffd700; // Un tono dorado clásico
  height: 2px; // Altura de la barra
  width: 100%; // Asegura que ocupa todo el ancho disponible

  margin-left: ${({ marginLeft }) => marginLeft || '0px'}; // Permite personalizar el margen izquierdo
`;
