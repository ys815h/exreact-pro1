import "./HelperDetail.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HelperDetail = (props) => {
  const [caregiverinfo, setCaregiverinfo] = useState([]);

  const tes = () => {
    axios
      .get(`api/v1/caregiver/${props.careno}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          const result = Object.values(response.data.result);
          setCaregiverinfo([...result, result.length + 1]);
        }
      })
      .catch((error) => {
        // 오류가 발생했을 때의 처리
        console.log(error);
      });
  };

  useEffect(() => {
    tes();
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
              <span>연령 : {caregiverinfo[9]}</span>
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
