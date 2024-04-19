import Header from "../../components/Header"
import Tag from "../../components/Tag"
import data from "../../utils/data-tags"
import { Container, Content, Wrapper } from "./styles"

const Main = () =>{
  return(
    <Container>
      <Header/>
      <Content>
        <Wrapper>
        {
          data.map((link) => (
            <Tag
              key={link.url}
              url={link.url}
              description={link.description}
            />
          ))
        }
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Main