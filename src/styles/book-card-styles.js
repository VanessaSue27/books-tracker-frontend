import styled from 'styled-components';

export const BookContainer = styled.div`
  // border: 2px solid red;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 35px;
  background-color: #f8f7f3;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #ede6e0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookDetailsContainer = styled.div`
  // border: 2px solid green;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const BookName = styled.h3`
  color: #dd4b00;
  font-size: 22px;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 0;
`;

export const Author = styled.h4`
  font-size: 16px;
  margin-top: 5px;
`;

export const FinishedText = styled.h4`
  font-size: 14px;
  color: #616161;
  margin-top: 0;
  width: 90%;
`;

export const Number = styled.h3`
  background-color: #dd4b00;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
  font-size: 20px;
  height: 30px;
`;

export const BookImage = styled.img`
  width: 85%;
  border-radius: 10px;
  margin-bottom: 20px;
`;
