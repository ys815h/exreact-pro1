import ApplyModalBtn from "../../component/Btn/ApplyModalBtn";
import DetailProfile from "../../component/DetailProfile/DetailProfile";
import HelperDetail from "../../component/HelperDetail/HelperDetail";
import { useLocation } from "react-router-dom";

const HelperDetailProfilePage = () => {
  const location = useLocation();
  const sch = location.search;
  const params = new URLSearchParams(sch);

  const careno = params.get("careno");
  const queno = params.get("queno");
  const year = params.get("year");
  const month = params.get("month");
  const careName = params.get("careName");

  return (
    <div className="hpfWrapper">
      <div className="helperPfWrapper">
        <HelperDetail careno={careno}></HelperDetail>
        <DetailProfile
          careno={careno}
          queno={queno}
          year={year}
          month={month}
        ></DetailProfile>
        <ApplyModalBtn
          careno={careno}
          year={year}
          month={month}
          careName={careName}
        ></ApplyModalBtn>
      </div>
    </div>
  );
};

export default HelperDetailProfilePage;
