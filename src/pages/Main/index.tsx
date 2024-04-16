import Header from "../../components/Header"
import Tag from "../../components/Tag"
import { Container, Content } from "./styles"

const Main = () =>{
  return(
    <Container>
      <Header/>
      <Content>
        <Tag/>
      </Content>
    </Container>
  )
}

export default Main