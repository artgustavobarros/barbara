import { createContext, useState } from "react";
import { ModalContextProps } from "./types";

export const ModalContext = createContext({})

const ModalProvider = ({children}: ModalContextProps) =>{

  const [isModalOpen, setIsModalOpen] = useState(false)

  return(
    <ModalContext.Provider
      value={{
        isModalOpen, setIsModalOpen
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider