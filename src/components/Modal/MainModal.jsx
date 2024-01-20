import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import {  Modal } from "./MainModal.styled";
import { modalScrollOff } from "components/Utils/utils";


const MainModal = ({ active, setActive, children}) => {
  
  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("keydown", closeModal);
      modalScrollOff(true);
    } else {
      document.removeEventListener("keydown", closeModal);
      modalScrollOff(false);
    }

    return () => {
      document.removeEventListener("keydown", closeModal);
      modalScrollOff(false);
    };
  }, [active, setActive]);

  return ReactDOM.createPortal(
    <Modal
      className={active ? "active" : ""}
      
      onClick={() => setActive(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Modal>,

    document.getElementById("modal")
  );
};

export default MainModal;