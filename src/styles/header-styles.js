import styled from 'styled-components';

export const HeaderContainer = styled.header`
  // border: 2px solid blue;
  text-align: center;
  margin: auto;
  width: 100%;
`;

export const TitleIconContainer = styled.div`
  // border: 2px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  color: #dd4b00;
  width: 20%;
  position: relative;
  z-index: 6;
  font-size: 27px;
  margin-left: 30px;
  text-align: left;
`;

export const BookIcon = styled.img`
  position: relative;
  z-index: 6;
  width: 40px;
  margin-right: 30px;
  margin-top: -45px;
`;

export const HeaderImage = styled.img`
  width: 90%;
  margin-top: -70px;
  position: relative;
  z-index: 5;
`;
