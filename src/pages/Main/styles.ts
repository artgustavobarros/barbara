import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.purple_background};

  padding: 24px;
  
  position: relative;
`

export const Content = styled.section`
  margin-top: 24px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`