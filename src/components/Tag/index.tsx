import { useModal } from "../../hook/useModalContext/useContext"
import { Container, ModalControl } from "./styles"
import { TagProps } from "./types"

const Tag = ({url, description}: TagProps) =>{

  const {setIsModalOpen, setShareUrl}= useModal()

  const handleModalToOPen = (url: string) =>{
    setIsModalOpen(true)
    setShareUrl(url)
  }

  return(
    <Container>
        <a 
          href={url} target="_blank">
            {description}
        </a>
      <ModalControl onClick={() => handleModalToOPen(url)}>...</ModalControl>
    </Container>
  )
}

export default Tag