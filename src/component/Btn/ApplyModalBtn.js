import "./ApplyModalBtn.css";
import React, { useState, useRef, useEffect } from "react";

const ApplyModalBtn = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="ApplyWrapper">
      <button className="ApplyBtn" onClick={openModal}>
        <img src="images/check-mark2.png" />
        <span>신청하기</span>
      </button>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="close">
              <span onClick={closeModal}>&times;</span>
            </div>
            {/* <div className="modalImg"> */}
            <img src="images/ApplySuccess.png" alt="" />
            {/* </div> */}
            <div className="md-content">
              <span>모달 내용</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyModalBtn;
