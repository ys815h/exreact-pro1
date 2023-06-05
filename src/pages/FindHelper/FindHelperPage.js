import FindBtn from "../../component/Btn/FindBtn";
import DropdownMenuData from "../../component/DropdownMenu/DropdownMenuData";
import FhIcon from "../../component/FHIcon/FhIcon";
import Header from "../../component/Header/Header";
import UserGPS from "../../component/UserGPS/UserGPS";
import "./FindHelperPage.css";

const FindHelperPage = () => {
  return (
    <div className="fhWrapper">
      <Header></Header>

      {/* 여기서 부터 라우팅으로 고민할 부분
          로그인하고 요양사 찾기를 눌렀을 때 여기로 이동 */}
      <FhIcon></FhIcon>

      <div className="GuideWrapper">
        <div>
          <DropdownMenuData />
        </div>
        <UserGPS />
      </div>

      <div>
        {/* 찾아보기 버튼 */}
        <FindBtn />
      </div>
    </div>
  );
};

export default FindHelperPage;
