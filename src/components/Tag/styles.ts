import styled from "styled-components";

export const Container = styled.section`
  width: 384px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .3s ease-in-out;

  position: relative;

  &:hover, &:focus{
    transform: scale(1.05);
  }

  > button {
    box-shadow: 1px 1px 3px 1px #ec9c7c;
    border-radius: 24px;
    border: none;
    width: 100%;
    height: 100%;
  }
`

export const ModalControl = styled.button`
  position: absolute;
  width: 18px !important;
  height: 18px !important;
  right: 15px;
  z-index: 2;

  box-shadow: none !important;
`