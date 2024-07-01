import styled from 'styled-components';

const goldenYellow = '#ffd700';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black; // Fondo asegurado que sea negro
  padding: 120px 20px 20px 20px; // Incremento en el padding superior
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export const FormField = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${goldenYellow};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${goldenYellow};
  border-radius: 4px;
  background-color: #333;
  color: white;

  &:focus {
    outline: none;
    border-color: ${goldenYellow};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${goldenYellow};
  border-radius: 4px;
  background-color: #333;
  color: white;
  height: 100px;

  &:focus {
    outline: none;
    border-color: ${goldenYellow};
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${goldenYellow};
  color: black;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e0c200;
  }
`;

export const Layout = styled.div`
background-color: black;
padding: 80px;
`;
