import styled from "styled-components";

export const ContainerResults = styled.section`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
`;

export const SearchNews = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  grid-gap: 15px;
  margin: 1rem auto;
`;

export const TextResults = styled.span`
  display: flex;
  align-items: center;
  width: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;

  span,
  h2 {
    margin-left: 1rem;
  }
`;
