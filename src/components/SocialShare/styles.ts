import styled from "styled-components";

export const Container = styled.section`
  > button{
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50%;
    padding: 8px;
    box-shadow: 1px 1px 3px 1px #ec9c7c; 
  }
`

export const Modal = styled.dialog`
  min-width: 100%;
  height: 100%;
  border: none;

  position: absolute;
  top: 0;
  z-index: 1000;

  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.3);  
`

export const FirstLine = styled.div`
  height: 60px;
  width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 64px;
  color: ${({theme}) => theme.colors.purple_1};

  > button{
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.purple_1};
    position: fixed;
    right: 60px;
  }
`

export const Content = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;

  .share {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-left: 60px;

    transition: all .3s ease-in-out;

    &:hover, &:focus{
      transform: scale(1.05);
    }
  }

  .icon{
    border-radius: 50%;
  }
`