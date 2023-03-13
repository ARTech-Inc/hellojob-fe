import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import DropdownProfile from "../DropdownProfile";
// import { getDataUsers } from "../../redux/actions/users";

export const Auth = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const userRole = JSON.parse(localStorage.getItem("@userLogin")).user.role;
  const userLoginID = JSON.parse(localStorage.getItem("@userLogin")).user.id;
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(`https://hellojob.up.railway.app/api/v1/users/${userLoginID}`)
      .then((result) => {
        setName(result.data.data.name);
        setAvatar(result.data.data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex gap-x-3 md:gap-x-6 max-sm:space-x-10 items-center">
        <img src={require("../../assets/img/bell.png")} alt="" />
        <Link to="/chat">
          <img src={require("../../assets/img/mail-navbar.png")} alt="" />
        </Link>

        <div
          onClick={() => setShowModal(!showModal)}
          className="w-8 h-8 rounded-full cursor-pointer border-zinc-500 duration-200"
        >
          <img
            src={
              avatar
                ? `https://hellojob.up.railway.app/images/${avatar}`
                : `https://hellojobb.vercel.app/images/default-avatar.jpg`
            }
            alt="asd"
            title={`${name}`}
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>
      <DropdownProfile
        isVisible={showModal}
        setIsLogin={setIsLogin}
        // closeModal={() => setShowModal(false)}
      />
    </>
  );
};
