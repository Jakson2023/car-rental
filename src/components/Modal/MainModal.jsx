import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { Content, Modal } from "./MainModal.styled";


const MainModal = ({ active, setActive, children,id}) => {
  
  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("keydown", closeModal);
    //   modalScrollOff(true);
    } else {
      document.removeEventListener("keydown", closeModal);
    //   modalScrollOff(false);
    }

    return () => {
      document.removeEventListener("keydown", closeModal);
    //   modalScrollOff(false);
    };
  }, [active, setActive]);

  return ReactDOM.createPortal(
    <Modal
      className={active ? "active" : ""}
      
      onClick={() => setActive(false)}
    >
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Modal>,

    document.getElementById("modal")
  );
};

export default MainModal;