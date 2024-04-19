import { Container} from "./styles"
import logo from '../../assets/img/logo.png'
import SocialShare from "../SocialShare"

const Header = () =>{
  return(
    <Container>
      <div>
        <SocialShare/>
    </div>
     <img
          src={logo}
          alt='logo'
        />
        <a href="https://www.instagram.com/oxentesoltaoscachos/" target="_blank">
          <h1>@oxentesoltaoscachos</h1>
        </a>
        <p>Links e cupons disponíveis ♥</p>

    </Container>
  )
}

export default Header