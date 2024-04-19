import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  color: ${({theme}) => theme.colors.purple_1};

  > div{
    margin-left: 350px;
  }

  > img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }

  > a{ 
    color: ${({theme}) => theme.colors.purple_1};

    h1{
    font-size: 24px;
    }
  }

  /* > div{
    position: absolute;
    top: 20px;
    right: 20px;
  } */
`
