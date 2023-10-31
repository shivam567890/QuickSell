import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import Card from "./Card";
import Plus from "../Img/Plus.png";
import tripleDot from "../Img/tripleDot.png";
const Body = () => {
  const { finalData } = useSelector((state) => state.DisplayDataReducer);

  return (
    finalData && (
      <div className="HorizontalVector">
        {finalData?.map((e, idx) => {
          return (
            <>
              <div key={idx} className="Individual_Card_Header">
                <div className="Display">
                  <div className="left">
                    <span>
                      {" "}
                      {e[idx]?.title} {e[idx]?.value?.length}
                    </span>
                  </div>
                  <div className="right">
                    <img
                      src={Plus}
                      alt="Plus Symbol"
                      height="20px"
                      width="20px"
                    />
                    <img
                      src={tripleDot}
                      alt="tripleDot"
                      height="20px"
                      width="20px"
                    />
                  </div>
                </div>
                <div className="VerticalCard">
                  {e[idx]?.value?.map((e, ind) => {
                    return <Card id={e.id} title={e.title} tag={e.tag} />;
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Body;
