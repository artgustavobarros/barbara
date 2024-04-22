import styled from "styled-components";

export const Container = styled.section`
  width: 38.4rem;
  height: 3.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .3s ease-in-out;

  position: relative;

  &:hover, &:focus{
    transform: scale(1.05);
  }

  > a {
    box-shadow: 1px 1px 3px 1px #ec9c7c;
    border-radius: 2.4rem;
    border: none;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({theme}) => theme.colors.purple_1};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
`

export const ModalControl = styled.button`
  position: absolute;
  width: 1.8rem !important;
  height: 1.8rem !important;
  right: 1.5rem;
  z-index: 2;

  box-shadow: none !important;
  background-color: transparent;
  border: none;
`