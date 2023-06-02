import "./HelperDetail.css";
import ide from "../../images/DELee.png";
import DetailBtn from "../Btn/DetailBtn";
import ApplyBtn from "../Btn/ApplyBtn";
// import "../Btn/DetailBtn.css";

const HelperDetail = () => {
  const arrays = [
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

  const queno = [1, 2, 3, 4, 5, 6];

  return (
    <div className="HelperDetailWrapper">
      {arrays.map((array, arrayIndex) => (
        <div key={arrayIndex} className="HelperProfileWrapper">
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
        </div>
      ))}
      {/* <div className="DetailWrapper"> */}
      {arrays.map((array, arrayIndex) => (
        <div key={arrayIndex} className="DetailWrapper">
          <span>기본사항</span>
          <div className="DetailBtnWrapper">
            <button key={queno} className="DetailBtn">
              <span>{array[0]} 님의 자기소개</span>
            </button>
            <button key={queno} className="DetailBtn">
              <span>{array[0]} 님의 근무내용</span>
            </button>
          </div>

          <span>경력</span>
          <div className="DetailBtnWrapper">
            <button key={queno} className="DetailBtn">
              <span>{array[0]} 님의 경험</span>
            </button>
            <button key={queno} className="DetailBtn">
              <span>{array[0]} 님의 자격증</span>
            </button>
          </div>

          <span>인성</span>
          <div className="DetailBtnWrapper">
            <button key={queno} className="DetailBtn">
              <span>{array[0]} 님의 장점</span>
            </button>
            <button key={queno} className="DetailBtn">
              <span>{array[0]} 님의 포부</span>
            </button>
          </div>

          <ApplyBtn></ApplyBtn>
          {/* 컴포넌트안에 텍스트가 안들어감 해결방법?
          <DetailBtn>
            <div>
              <span>{array[0]} 님의 장점</span>
            </div>
          </DetailBtn>
          <DetailBtn>{array[0]} 님의 포부</DetailBtn> */}
        </div>
      ))}
    </div>
    // </div>
  );
};
export default HelperDetail;
