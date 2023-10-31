import React, { useState } from "react";
import Modal from "./Modal";
import CustomiseIcon from "../Img/customise_icon.png";
import DownwordIcon from "../Img/Downword_Arrow.png";
import "../App.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar">
      <button className="display-button" onClick={toggleModal}>
        <img
          src={CustomiseIcon}
          alt="CustomiseIcon"
          height="20px"
          width="20px"
          style={{ marginRight: "8px" }}
        />
        <h3 style={{ marginRight: "8px" }}>Display</h3>
        <img src={DownwordIcon} alt="DownwordIcon" height="15px" width="15px" />
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
};

export default Header;
