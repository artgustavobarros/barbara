import styled from "styled-components";

export const Container = styled.section`
  > button{
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: 50%;
    padding: .8rem;
    margin-left: 3rem;
    box-shadow: 1px 1px 3px 1px #ec9c7c; 
  }
`

export const Modal = styled.dialog`
  width: 100%;
  height: 100%;
  border: none;

  position: absolute;
  top: 0;
  z-index: 1000;

  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.3);  

  display: ${({open}) => open? 'flex': 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const FirstLine = styled.div`
  height: 6rem;
  width: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 6.4rem;
  color: ${({theme}) => theme.colors.purple_1};

  > button{
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.purple_1};
    position: fixed;
    right: 6rem;
    }
`

export const Content = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.4rem;

  .share {
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-left: 6rem;

    transition: all .3s ease-in-out;

    &:hover, &:focus{
      transform: scale(1.05);
    }
  }

  .icon{
    border-radius: 50%;
  }
`