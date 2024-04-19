import { useContext } from "react";
import { ModalContext } from ".";
import { ContextPropsReply} from "./types";

export const useModal = () => useContext(ModalContext) as ContextPropsReply