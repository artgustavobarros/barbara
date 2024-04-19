import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from "react-share"
import { Container, Content, FirstLine, Modal } from "./styles"
import { useModal } from "../../hook/useModalContext/useContext"

const SocialShare = () =>{

 const {isModalOpen, setIsModalOpen, shareUrl, setShareUrl} = useModal()

 const handleModalToOpen = () =>{
  setIsModalOpen(true)
  setShareUrl('#')
 }
 
  return(
    <Container>
      <button onClick={handleModalToOpen}>...</button>
      <Modal open={isModalOpen}>
        <FirstLine>
          <h1>Compartilhe</h1>
          <button onClick={() =>setIsModalOpen(false)}>x</button>
        </FirstLine>
        <Content>
          <FacebookShareButton className='share' url={shareUrl}>
            <FacebookIcon size={24} className="icon"/>
            Compartilhe com o Facebook
          </FacebookShareButton>
          <LinkedinShareButton className='share' url={shareUrl}>
            <LinkedinIcon size={24} className="icon"/>
            Compartilhe com o Linkedin
          </LinkedinShareButton>
          <TwitterShareButton className='share' url={shareUrl}>
            <XIcon size={24} className="icon"/>
            Compartilhe com o X
          </TwitterShareButton>
          <WhatsappShareButton className='share' url={shareUrl}>
            <WhatsappIcon size={24} className="icon"/>
            Compartilhe com o Whatsapp
          </WhatsappShareButton>
          {/* <FacebookMessengerShareButton className='share' url={shareUrl} appId='944918125623358'>
            <FacebookMessengerIcon size={18} className="icon"/>
            Compartilhe com o FacebookMessanger
          </FacebookMessengerShareButton> */}
          <EmailShareButton className='share' url={shareUrl}>
            <EmailIcon size={24} className="icon"/>
            Compartilhe com o Whatsapp
          </EmailShareButton>
        </Content>
      </Modal>
    </Container>
  )
}

export default SocialShare