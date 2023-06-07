import "./FindBtn.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const FindBtn = (props) => {
  // const [showDiv, setShowDiv] = useState(true);
  const handleClick = () => {
    axios
      .get(
        `/api/v1/caregiver/${props.year}/${props.month}/${props.lon}/${props.lati}`
      )
      .then((res) => {
        let results = res.data.result;
        console.log(results);
        // setShowDiv(false);
      });
  };

  // const navigate = useNavigate();

  return (
    <div className="FindBtnWrapper">
      <div>
        <button className="FindBtn" onClick={handleClick}>
          <span>찾아보기</span>
        </button>
      </div>
    </div>
  );
};

export default FindBtn;
