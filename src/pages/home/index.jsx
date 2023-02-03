import { Header } from "../../components/header";
import { StyleBody, StyledSection, StyledDiv, StyledUl } from "./styles";
import { useContext, useState } from "react";
import { ModalNewTech } from "../../components/modal";
import { StyledButtonPlus } from "../../components/button";

import { Navigate } from "react-router-dom";

/* MODAL IMPORTS*/
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ListItem } from "../../components/li";
import { UserContext } from "../../contexts/UserContext";

export function Home() {
  const { userData, loading } = useContext(UserContext);
  const [showDialog, setShowDialog] = useState(false);

  function open() {
    setShowDialog(true);
  }

  function close() {
    setShowDialog(false);
  }

  if (loading) {
    return null;
  }

  return userData ? (
    <StyleBody>
      <Header />
      <StyledSection>
        <StyledDiv>
          <h2>Olá, {userData.name}</h2>
          <span>{userData.course_module}</span>
        </StyledDiv>
      </StyledSection>
      <StyledSection>
        <StyledDiv>
          <h2>Tecnologias</h2>
          <StyledButtonPlus onClick={open}></StyledButtonPlus>
        </StyledDiv>
        <StyledDiv>
          <StyledUl>
            {userData.techs.map((tech) => {
              return <ListItem key={tech.id} item={tech} />;
            })}
          </StyledUl>
        </StyledDiv>

        <Dialog isOpen={showDialog} onDismiss={close}>
          <h2>Cadastrar Tecnologia</h2>
          <button className="close-button" onClick={close}>
            <span aria-hidden>×</span>
          </button>
          <ModalNewTech close={close} />
        </Dialog>
      </StyledSection>
    </StyleBody>
  ) : (
    <Navigate to="/" />
  );
}
