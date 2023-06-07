import { useParams } from "react-router-dom";
import "./DetailProfile.css";
import React, { useState } from "react";

const DetailProfile = (props) => {
  const careno = { id: 1, value: "이다은" };
  const queno = [
    {
      id: 1,
      value:
        "안녕하세요. 저는 실버요양사 김민수입니다. 남성, 31세이며 서울 중구 필동2가에서 근무 대기하고 있습니다.",
    },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "4" },
    { id: 5, value: "5" },
  ];

  // const questionId = props.match.params.id; // 라우트 매개변수에서 questionId를 가져옵니다.

  // react-router-dom 버전 6부터는 element로 컴포넌트를 만들고,
  // route props(match, history, location)을 받지 않는다.
  // 따라서, useParams, useLocation, useHistory를 사용하여
  // route context에 접근한다
  const { id } = useParams(props);

  return (
    <div className="detailProfileWrapper">
      <div className="detailHeader">
        <div className="detailTag">질문</div>
        <span>{careno.value} 님의 자기소개</span>
      </div>
      <div className="detailTag">답변</div>
      <div className="detailContent">
        <span>{queno[0].value}</span>
        {/* <span>{queno[parseInt(id) - 1].value}</span> */}
      </div>
      <div className="detailFooter">
        <button className="ttsBtn">
          <img src="/images/ttsBtn-stop.png" alt="" />
          <span>다시 듣기</span>
        </button>
        <button className="ttsBtn">
          <img src="/images/ttsBtn-replay.png" alt="" />
          <span>다음 질문</span>
        </button>
      </div>
    </div>
  );
};

export default DetailProfile;
