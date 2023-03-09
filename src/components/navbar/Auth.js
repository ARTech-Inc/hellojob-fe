import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  useEffect(() => {
    axios
      .get(`https://hellojob.up.railway.app/api/v1/users/${userLoginID}`)
      .then((result) => {
        setAvatar(result.data.data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex gap-x-3 md:gap-x-6 items-center">
      <img src={require("../../assets/img/bell.png")} alt="" />
      <Link to="/chat">
        <img src={require("../../assets/img/mail-navbar.png")} alt="" />
      </Link>
      <div className="">
        <div className="dropdown dropdown-end z-20">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img
                src={
                  avatar
                    ? `https://hellojob.up.railway.app/images/${avatar}`
                    : `https://hellojobb.vercel.app/images/default-avatar.jpg`
                }
                alt=""
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 bg-slate-100 shadow menu menu-compact dropdown-content rounded-box w-52 z-20"
          >
            <li>
              <button
                onClick={() => {
                  if (userRole === "perekrut") {
                    navigate(`/profile/recruiter/edit/${userLoginID}`);
                  } else {
                    navigate(`/profile/talent/edit/${userLoginID}`);
                  }
                }}
                className="hover:bg-amber-200 justify-between"
              >
                Profile
                <span className="badge bg-purple border-none text-white">
                  New
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/home")}
                className="hover:bg-amber-200 justify-between"
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:bg-amber-200"
                onClick={() => {
                  localStorage.removeItem("@userLogin");
                  setIsLogin(false);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
