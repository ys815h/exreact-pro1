import axios from "axios";
import "./ApplyModalBtn.css";
import React, { useState, useRef } from "react";

const ApplyModalBtn = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();
  const seniorno = 1;
  const [dataform, setDataform] = useState({
    careno: props.careno,
    seniorno: seniorno,
    // seniorno: localStorage.getItem("user").name,
    year: props.year,
    month: props.month,
  });

  const openModal = () => {
    axios
      .post("api/v1/connect", dataform, {
        headers: { "Content-Type": `multipart/form-data` },
      })
      .then((response) => {
        setModalOpen(true);
      })
      .catch((error) => {
        // 오류가 발생했을 때의 처리
        console.log(error);
        alert("오류");
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="ApplyWrapper">
      <button className="ApplyBtn" onClick={openModal}>
        <img src="images/check-mark2.png" alt="" />
        <span>신청하기</span>
      </button>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="close">
              <span onClick={closeModal}>&times;</span>
            </div>
            <img src="images/ApplySuccess.png" alt="" />
            <div className="md-content">
              <span>[{props.careName}] 요양사님을 신청하였습니다.</span>
              <span>추후 결과를 문자로 전달해 드리겠습니다.</span>
              <span> 신청일 기준 1~2일 소요 될 수 있습니다.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyModalBtn;
