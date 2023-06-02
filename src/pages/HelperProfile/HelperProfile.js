// import DetailBtn from "../../component/Btn/DetailBtn";
import Header from "../../component/Header/Header";
import HelperDetail from "../../component/HelperDetail/HelperDetail";
import "./HelperProfile.css";

const HelperProfile = () => {
  return (
    <div className="hpfWrapper">
      <Header></Header>

      <div className="helperPfWrapper">
        <HelperDetail></HelperDetail>
        <div></div>
      </div>
    </div>
  );
};

export default HelperProfile;
