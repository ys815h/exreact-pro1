import { useEffect } from "react";
import ApplyModalBtn from "../../component/Btn/ApplyModalBtn";
// import DetailBtn from "../../component/Btn/DetailBtn";
import DetailProfile from "../../component/DetailProfile/DetailProfile";
import Header from "../../component/Header/Header";
import HelperDetail from "../../component/HelperDetail/HelperDetail";
// import "./HelperDetailProfile.css";

const HelperDetailProfile = () => {
  return (
    <div className="hpfWrapper">
      <Header></Header>

      <div className="helperPfWrapper">
        <HelperDetail></HelperDetail>
        <DetailProfile></DetailProfile>
        <ApplyModalBtn></ApplyModalBtn>
      </div>
    </div>
  );
};

export default HelperDetailProfile;
