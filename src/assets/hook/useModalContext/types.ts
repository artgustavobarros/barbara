import { Dispatch, ReactNode } from "react";

export interface ModalContextProps{
  children: ReactNode
}

export interface ContextPropsReply{
  isModalOpen: boolean
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>
}