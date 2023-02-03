import { StyledLi } from "./styles";
import { Dialog } from "@reach/dialog";
import { useState } from "react";
import { ModalEditTech } from "../modal";

export function ListItem({ item }) {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <h2>Editar Tecnologia</h2>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <ModalEditTech
          close={close}
          title={item.title}
          status={item.status}
          id={item.id}
        />
      </Dialog>

      <StyledLi>
        <h2>{item.title}</h2>
        <div>
          <h4>{item.status}</h4>
          <button onClick={open}></button>
        </div>
      </StyledLi>
    </>
  );
}
