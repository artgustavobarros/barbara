import { createContext, useState } from "react";
import { ModalContextProps } from "./types";

export const ModalContext = createContext({})

const ModalProvider = ({children}: ModalContextProps) =>{

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shareUrl, setShareUrl] = useState('https://oxentesoltaoscachos.netlify.app/')

  return(
    <ModalContext.Provider
      value={{
        isModalOpen, setIsModalOpen, shareUrl, setShareUrl
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider