import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";
import { AddPortfolioForm } from "./components/AddPortfolioForm";
import { AddSkillForm } from "./components/AddSkillForm";
import { AddWorkExpForm } from "./components/AddWorkExpForm";
import { EditBioForm } from "./components/EditBioForm";
import axios from "axios";

export const EditProfileTalent = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  // const loadingUser = userDetail.loading;
  // const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, [refetch]);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // setImagePreview(URL.createObjectURL(file));
  };

  const [image, setImage] = useState();
  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append("ava", image);
    // console.log(image);

    axios
      .patch(`https://hellojob.up.railway.app/api/v1/users/${userId}`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Successfully change picture");
        setRefetch(!refetch);
      })
      .catch((err) => console.log(err.message));
  };

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="h-[600vh] sm:h-[700vh] lg:h-[600vh] w-full bg-base pt-28 max-sm:pt-16 px-3 flex flex-col gap-y-5  md:gap-x-6 md:flex-row md:px-32 md:pt-40">
        <section className="w-full md:w-[60%] h-[90vh] md:h-[120vh] flex flex-col gap-y-5 sm:mb-10">
          <div className="profile-card shadow-2xl bg-white w-full base-rounded h-[80%] md:h-[150vh] px-5 py-5 flex flex-col gap-y-8">
            <div className="bio flex flex-col gap-y-3">
              <div className=" w-full flex flex-col justify-center items-center">
                <form onSubmit={onSubmit}>
                  <img
                    src={
                      userDataDetail?.avatar !== null
                        ? `https://hellojob.up.railway.app/images/${userDataDetail?.avatar}`
                        : `http://localhost:3000/images/default-avatar.jpg`
                    }
                    alt={userDataDetail.name}
                    className="w-32 h-32 rounded-full"
                  />
                  <input type="file" onChange={(e) => onImageUpload(e)} />
                  <button type="submit" className="bg-purple p-[10px]">
                    Change Picture
                  </button>
                </form>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#1F2A36]">
                  {userDataDetail ? userDataDetail.name : ""}
                </h2>
                <p className="text-lg text-[#1F2A36]">
                  {userDataDetail.job_desk !== ""
                    ? userDataDetail.job_desk
                    : "(Empty job_desk)"}
                </p>
                <p className="text-[#9EA0A5]">
                  {userDataDetail.job_status !== ""
                    ? userDataDetail.job_status
                    : "(Empty job status)"}
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/loc.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {userDataDetail.domisili
                      ? userDataDetail.domisili
                      : "(Empty domisili)"}
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/phone.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {userDataDetail ? userDataDetail.phone : ""}
                  </p>
                </div>
                <p className="text-[#9EA0A5] pt-2">
                  {userDataDetail.description !== "null" &&
                  userDataDetail.description !== null
                    ? userDataDetail.description
                    : "(Empty description)"}
                </p>
              </div>
            </div>
          </div>
          <button className="bg-purple text-white base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200">
            Ubah Password
          </button>
          <button
            onClick={() => navigate("/home")}
            className="bg-transparent text-purple base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-purple hover:text-white duration-200"
          >
            Kembali
          </button>
        </section>
        <section className="w-full h-[450vh] sm:h-[500vh] md:h-[500vh] flex flex-col gap-y-5">
          <EditBioForm />
          <AddSkillForm />
          <AddWorkExpForm />
          <AddPortfolioForm />
        </section>
      </main>
      <Footer />
    </>
  );
};
