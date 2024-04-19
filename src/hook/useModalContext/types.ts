import { Dispatch, ReactNode } from "react";

export interface ModalContextProps{
  children: ReactNode
}

export interface ContextPropsReply{
  isModalOpen: boolean
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>
  shareUrl: string
  setShareUrl: Dispatch<React.SetStateAction<string>>
}