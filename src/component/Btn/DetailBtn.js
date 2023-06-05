import { useNavigate } from "react-router-dom";
import "./DetailBtn.css";
import React, { useState } from "react";

const DetailBtn = (props) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/helperDetailProfile");
  };

  const careno = { id: 3, value: "이다은" };
  const queno = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="DetailWrapper1">
      <span>기본사항</span>
      <div className="DetailBtnWrapper1">
        {/* <button
          key={queno[0]}
          className="DetailBtn1"
          onClick={() => navigate("/helperDetailProfile/1")}
        >
          <span>{careno.value} 님의 자기소개</span>
        </button> */}
        <button
          key={queno[0]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[0].id)}
        >
          <span>{careno.value} 님의 자기소개</span>
        </button>
        <button
          key={queno[1]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[1])}
        >
          <span>{careno.value} 님의 근무내용</span>
        </button>
      </div>

      <span>경력</span>
      <div className="DetailBtnWrapper1">
        <button
          key={queno[2]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[2])}
        >
          <span>{careno.value} 님의 경험</span>
        </button>
        <button
          key={queno[3]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[3])}
        >
          <span>{careno.value} 님의 자격증</span>
        </button>
      </div>

      <span>인성</span>
      <div className="DetailBtnWrapper1">
        <button
          key={queno[4]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[4])}
        >
          <span>{careno.value} 님의 장점</span>
        </button>
        <button
          key={queno[5]}
          className="DetailBtn1"
          onClick={() => handleBtnClick(queno[5])}
        >
          <span>{careno.value} 님의 포부</span>
        </button>
      </div>
    </div>
  );
};

export default DetailBtn;
