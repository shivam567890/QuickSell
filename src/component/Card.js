import React from "react";
import "../App.css";
import Student from "../Img/Student.png";
import tripleDot from "../Img/tripleDot.png";
const Card = ({ id, title, tag }) => {
  return (
    <div className="mainCard">
      <div className="cardTop">
        <span>{id}</span>
        <div className="studentImage">
          <img src={Student} alt="studentImage" />
        </div>
      </div>
      <div className="cardTitle">
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags">
          <img src={tripleDot} alt="tripleDot" height="10px" width="10px" />
        </div>
        {tag?.map((e, id) => {
          return (
            <div key={id} className="tags">
              <span>•</span> {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
