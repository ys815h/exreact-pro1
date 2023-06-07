import "./HelperDetail.css";
import ide from "../../images/DELee.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HelperDetail = () => {
  const [caregiverinfo, setCaregiverinfo] = useState([]);

  const tes = () => {
    axios
      .get("/api/v1/caregiver/1", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log("dddddss" + response.data.result);
          console.log(typeof response.data.result);
          const result = Object.values(response.data.result);

          console.log("rst dsfdasd " + typeof response.data.result);
          console.log("rst dsfdasd " + typeof result);
          setCaregiverinfo([...result, result.length + 1]);
          console.log("asdfasd" + caregiverinfo[0]);
        }
      })
      .catch((error) => {
        // 오류가 발생했을 때의 처리
        console.log(error);
      });
  };

  useEffect(() => {
    tes();
    console.log("Test" + caregiverinfo);
  }, []);

  return (
    <div className="HelperDetailWrapper">
      <div className="HelperProfileWrapper">
        <div className="HelperProfGrid1">
          <div>
            <div className="HelperProfName">
              <span>{caregiverinfo[1]}</span>
            </div>
            <div className="HelperProfCon">
              <span>성별 : {caregiverinfo[5]}</span>
              <span>근무요일 : {caregiverinfo[7]}</span>
              <span>연령 : {caregiverinfo[8]}</span>
              <span>근무시간 : {caregiverinfo[6]}</span>
            </div>
          </div>

          <div className="HelperProfImg">
            <img src={caregiverinfo[9]} alt="" />
          </div>
        </div>

        <div className="HelperTagWrapper">
          <div className="HelperTag">
            <span>#{caregiverinfo[2]}</span>
          </div>
          <div className="HelperTag">
            <span>#{caregiverinfo[3]}</span>
          </div>
          <div className="HelperTag">
            <span>#{caregiverinfo[4]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelperDetail;
