import styled from "styled-components";

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;
  margin-left: 1rem;

  i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    &:focus {
      border: 1px solid #353535;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 8rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem 1rem;
  /* position: fixed;
    top: 0;*/
  background-color: white;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Button = styled.button`
  background-color: #393a3b;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-right: 1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #757575;
  }
`;
