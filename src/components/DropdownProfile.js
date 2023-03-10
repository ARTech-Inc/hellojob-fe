import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DropdownProfile({ isVisible, closeModal, setIsLogin }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const userRole = JSON.parse(localStorage.getItem("@userLogin")).user.role;
  const userLoginID = JSON.parse(localStorage.getItem("@userLogin")).user.id;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  if (!isVisible) return null;
  return (
    <>
      <div className="flex flex-col w-[12rem] h-[10rem] bg-white shadow-2xl absolute md:top-24 md:right-32 bottom-28 right-10 rounded-xl p-6 items-center justify-center space-y-2">
        <p
          onClick={() => {
            if (userRole === "perekrut") {
              navigate(`/profile/recruiter/edit/${userLoginID}`);
            } else {
              navigate(`/profile/talent/edit/${userLoginID}`);
            }
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-purple-300 duration-150 cursor-pointer"
        >
          Profile
        </p>
        <p
          onClick={() => navigate(`/`)}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-purple-300 duration-150 cursor-pointer"
        >
          Home
        </p>
        <p
          onClick={() => {
            localStorage.removeItem("@userLogin");
            setIsLogin(false);
            navigate("/");
          }}
          className="w-full py-2 text-center hover:rounded-xl hover:bg-purple-300 duration-150 cursor-pointer"
        >
          Logout
        </p>
      </div>
    </>
  );
}
