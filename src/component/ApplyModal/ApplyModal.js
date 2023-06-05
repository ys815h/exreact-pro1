// import "./ApplyModal.css";
// import React, { useState } from "react";

// const ApplyModal = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleOutsideClick = (event) => {
//     if (event.target.classList.contains("modal")) {
//       closeModal();
//     }
//   };

//   return (
//     <div>
//       <button onClick={openModal}>모달 열기</button>
//       {isModalOpen && (
//         <div className="modal" onClick={handleOutsideClick}>
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <p>모달 내용</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplyModal;
