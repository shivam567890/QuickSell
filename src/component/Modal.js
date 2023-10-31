// Modal.js
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Operations } from "./Operations";

function Modal({ isOpen, onClose }) {
  const [groupType, setgroupType] = useState(
    localStorage.getItem("group") || "status"
  );
  const [orderType, setorderType] = useState(
    localStorage.getItem("order") || "priority"
  );

  const dispatch = useDispatch();
  const { apiTickets, allUser } = useSelector((state) => state.ApiDataReducer);

  // For selecting an option
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setgroupType(event.target.value);
    localStorage.setItem("group", event.target.value);
  };
  const [selectedOption1, setSelectedOption1] = useState("");
  const handleSelectChange1 = (event) => {
    setorderType(event.target.value);
    setSelectedOption1(event.target.value);
    localStorage.setItem("order", event.target.value);
  };

  useEffect(() => {
    if (groupType === "user") {
      dispatch(
        Operations(
          groupType,
          {
            apiTickets,
            allUser,
          },
          orderType
        )
      );
    } else {
      dispatch(Operations(groupType, apiTickets, orderType));
    }
  }, [apiTickets, dispatch, groupType, allUser, orderType]);

  // For opening an closing of Modal.

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && event.target.classList.contains("modal")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="model_text">
          <h4>Grouping</h4>
        </div>
        <div>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="status">status</option>
            <option value="user">user</option>
            <option value="priority">priority</option>
          </select>
        </div>
        <div className="model_text">
          <h4>Ordering</h4>
        </div>
        <div>
          <select value={selectedOption1} onChange={handleSelectChange1}>
            <option value="">Select an option</option>
            <option value="priority">priority</option>
            <option value="title">title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Modal;
