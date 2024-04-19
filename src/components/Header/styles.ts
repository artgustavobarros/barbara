import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  color: ${({theme}) => theme.colors.purple_1};

  > div{
    margin-left: 31.6rem;
  }

  > img {
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 50%;
  }

  > a{ 
    color: ${({theme}) => theme.colors.purple_1};

    h1{
    font-size: 2.4rem;
    }
  }
`
