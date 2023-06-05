// import DetailBtn from "../../component/Btn/DetailBtn";
import ApplyModalBtn from "../../component/Btn/ApplyModalBtn";
import DetailBtn from "../../component/Btn/DetailBtn";
import Header from "../../component/Header/Header";
import HelperDetail from "../../component/HelperDetail/HelperDetail";
import "./HelperProfilePage.css";

const HelperProfilePage = () => {
  return (
    <div className="hpfWrapper">
      <Header></Header>

      <div className="helperPfWrapper">
        <HelperDetail></HelperDetail>
        <DetailBtn></DetailBtn>
        <ApplyModalBtn></ApplyModalBtn>
      </div>
    </div>
  );
};

export default HelperProfilePage;
