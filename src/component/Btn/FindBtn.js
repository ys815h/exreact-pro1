import "./FindBtn.css";
import React, { useState } from "react";

import kms from "../../images/MSKim.png";
import kyl from "../../images/YLKim.png";
import ide from "../../images/DELee.png";

const FindBtn = () => {
  const [showDiv, setShowDiv] = useState(true);
  const handleClick = () => {
    setShowDiv(false);
  };

  const arrays = [
    [
      "김민수",
      "열정있는",
      "친절한",
      "약속중시",
      "남성",
      "12:00~17:00",
      5,
      31,
      kms,
    ],
    [
      "김유리",
      "책임감있는",
      "꼼꼼한",
      "친절한",
      "여성",
      "12:00~17:00",
      5,
      33,
      kyl,
    ],
    [
      "이다은",
      "사려깊은",
      "약속중시",
      "꼼꼼한",
      "여성",
      "12:00~17:00",
      5,
      29,
      ide,
    ],
  ];

  return (
    <div className="FindBtnWrapper">
      <div>
        <button className="FindBtn" onClick={handleClick}>
          <span>찾아보기</span>
        </button>
      </div>
      {/* 붉은 박스 */}
      <div>
        {showDiv ? (
          <div className="Guidebox">
            <div className="GuideText">
              [년도]와 [월]을 선택 후 위의 찾아보기를 선택해 주세요
            </div>
          </div>
        ) : (
          <div>
            {arrays.map((array, arrayIndex) => (
              <button key={arrayIndex} className="HelperProfWrapper">
                <div className="HelperProfGrid1">
                  <div>
                    <div className="HelperProfName">
                      <span>{array[0]}</span>
                    </div>
                    <div className="HelperProfCon">
                      <span>성별 : {array[4]}</span>
                      <span>근무요일 : {array[6]}</span>
                      <span>연령 : {array[7]}</span>
                      <span>근무시간 : {array[5]}</span>
                    </div>
                  </div>

                  <div className="HelperProfImg">
                    <img src={array[8]} />
                  </div>
                </div>

                <div className="HelperTagWrapper">
                  <div className="HelperTag">
                    <span>#{array[1]}</span>
                  </div>
                  <div className="HelperTag">
                    <span>#{array[2]}</span>
                  </div>
                  <div className="HelperTag">
                    <span>#{array[3]}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBtn;
