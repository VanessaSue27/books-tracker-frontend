import styled from 'styled-components';

export const FormContainer = styled.form`
  // border: 2px solid red;
  margin: 30px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-align: center;
`;

export const AddBookTitle = styled.h2`
  font-family: 'Roboto Slab', serif;
  color: #dd4b00;
  font-size: 24px;
  text-align: center;
  margin-bottom: 0;
`;

export const SmallText = styled.h4`
  font-family: 'Roboto Slab', serif;
  color: #dd4b00;
  font-size: 16px;
  text-align: center;
  margin-top: 0;
`;

export const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid #b4b4b4;
  margin: 15px 0;
  font-size: 14px;
`;

export const DateLabel = styled.label`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  font-family: 'Roboto Slab', serif;
  margin-top: 15px;
  background-color: #dd4b00;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;

  &:hover {
    background-color: #fddaa4;
    cursor: pointer
  }
`;
