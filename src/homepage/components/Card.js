import React from "react";
import { getTimeDiffFromNow } from "../../utils/Date";

function Card({ data }) {
  const bgColor = data.logoBackground;

  return (
    <div className="card-container">
      <div style={{ backgroundColor: bgColor }} className="card-logo">
        <img src={data.logo} alt="logo" />
      </div>
      <div className="card-body">
        <div className="card-secondary-text">
          <div style={{ paddingRight: "15px" }}>{getTimeDiffFromNow(data.postedAt)}</div> <li>{data.contract}</li>
        </div>
        <div>
          <b>{data.position}</b>
        </div>
        <div className="card-secondary-text">{data.company}</div>

        <div className="card-primary-text">{data.location}</div>
      </div>
    </div>
  );
}

export default Card;
