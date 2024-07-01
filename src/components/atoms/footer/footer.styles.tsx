// footer.styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px;
  display: flex; // Usar flexbox para manejar la disposición interna
  justify-content: space-between; // Espacia los elementos al principio y al final
  align-items: center; // Alinea los elementos verticalmente
  background-color: #333;
  color: white;
  width: 100%;
`;

export const TextContainer = styled.div`
  flex: 1; // Ocupa el espacio necesario para empujar los iconos al final
`;

// footer.styles.ts
export const IconContainer = styled.div`
  display: flex; // Asegura que los iconos estén en línea
  gap: 10px; // Espacio entre iconos

  a {
    color: white; // Establece el color de los iconos explícitamente a blanco
    text-decoration: none; // Elimina el subrayado de los enlaces

    &:hover, &:focus {
      opacity: 0.8; // Efecto al pasar el mouse y al enfocar para mejorar la interactividad
    }
  }
`;
