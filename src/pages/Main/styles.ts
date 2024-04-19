import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.purple_background};

  padding: 2.4rem 2.4rem 0;
  
  position: relative;
`

export const Content = styled.section`
  margin-top: 2.4rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`