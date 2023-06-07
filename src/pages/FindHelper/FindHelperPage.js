import { useState } from "react";
import FindBtn from "../../component/Btn/FindBtn";
import DropdownMenuData from "../../component/DropdownMenu/DropdownMenuData";
import FhIcon from "../../component/FHIcon/FhIcon";
import Header from "../../component/Header/Header";
import UserGPS from "../../component/UserGPS/UserGPS";
import "./FindHelperPage.css";

var user = {
  numberPk: "1",
  name: "전다연",
  roles: null,
  address: "충북 괴산군 청안면 질마로 1271-59",
  lon: "142",
  lati: "44",
};

const FindHelperPage = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const changeYear = (value) => {
    setYear(value);
  };
  const changeMonth = (value) => {
    setMonth(value);
  };

  return (
    <div className="fhWrapper">
      <Header></Header>

      {/* 여기서 부터 라우팅으로 고민할 부분
          로그인하고 요양사 찾기를 눌렀을 때 여기로 이동 */}
      <FhIcon></FhIcon>

      <div className="GuideWrapper">
        <div>
          <DropdownMenuData changeYear={changeYear} changeMonth={changeMonth} />
        </div>
        {/* <UserGPS address={localStorage.getItem}/> 
          세션에서 값 가져와 보는거 테스트 해보기
        */}
        <UserGPS address={user.address} />
      </div>

      <div>
        {/* 찾아보기 버튼 */}
        <FindBtn year={year} month={month} lon={user.lon} lati={user.lati} />
      </div>
    </div>
  );
};

export default FindHelperPage;
