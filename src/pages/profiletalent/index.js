import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";
import { TabTitle } from "../../utils/GeneralFunc";
import { ExperiencePortfolio } from "./components/ExperiencePortfolio";

export const ProfileTalent = () => {
  // const userDetail = useSelector((state) => state.users);
  // const userDataDetail = userDetail.data;
  // const loadingUser = userDetail.loading;
  // const errorUser = userDetail.error;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDataUsers(`/${userId}`));
  // }, []);
  // const dataSkillArray = userDataDetail.skills ? userDataDetail.skills : "";

  const { userId } = useParams();
  const URL = `https://hellojob.up.railway.app`;
  const [datas, setDatas] = useState({});
  useEffect(() => {
    const getDataUser = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/users/${userId}`);
        const data = response.data.data;
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, []);

  const skillArray = datas?.skills;

  const navigate = useNavigate();

  // console.log(datas);

  TabTitle("HelloJob - Profile");
  // if (loadingUser) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="relative">
      <nav className="navbar-mobile w-full h-[10vh] md:hidden flex px-3 items-center justify-center fixed top-0 left-0 bg-white z-20 shadow-2xl">
        <p className="text-purple text-xl cursor-pointer font-bold">HelloJob</p>
      </nav>
      <Navbar />
      <main className="w-full h-[400vh] md:h-[300vh] bg-base relative">
        <div className="w-full h-[60vh] bg-purple"></div>
        <div className="w-full h-[200vh] bg-base"></div>
        <section className="w-full h-[350vh] md:h-[150vh] px-3 md:px-32 absolute z-10 top-20 flex flex-col md:flex-row md:pt-20 md:gap-x-10 gap-y-6">
          <div className="profile-card bg-white w-full md:w-[60%] base-rounded h-[130vh] md:h-[200vh] px-5 py-5 flex flex-col gap-y-8 shadow-xl">
            <div className="bio flex flex-col gap-y-3 ">
              <div className=" w-full flex justify-center items-center">
                <img
                  src={
                    datas?.avatar !== null
                      ? `https://hellojob.up.railway.app/images/${datas?.avatar}`
                      : `http://localhost:3000/images/default-avatar.jpg`
                  }
                  alt={datas?.name}
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#1F2A36]">
                  {datas ? datas.name : ""}
                </h2>
                <p className="text-lg text-[#1F2A36]">
                  {datas.job_desk !== "" ? datas.job_desk : `(Empty job desk)`}
                </p>
                <p className="text-[#9EA0A5]">
                  {datas.job_status !== ""
                    ? datas.job_status
                    : `(Empty job status)`}
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/loc.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {datas.domisili ? datas.domisili : "(Empty domisili)"}
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/phone.png")} alt="" />
                  <p className="text-[#9EA0A5]">{datas ? datas.phone : ""}</p>
                </div>
                <p className="text-[#9EA0A5] pt-2">
                  {datas.description !== "null" && datas.description !== null
                    ? datas.description
                    : `(Empty description)`}
                </p>
              </div>
              <button
                onClick={() => navigate(`/profile/talent/hire/${datas.id}`)}
                // onClick={(id) => {
                //   getDetailUser(userDataDetail.id);
                // }}
                className="bg-purple base-rounded text-white mt-1 py-5 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200"
              >
                Hire
              </button>
            </div>
            <div className="skill w-full flex flex-col gap-y-3">
              <h2 className="text-2xl font-bold text-[#1F2A36]">Skill</h2>
              <div className="flex flex-wrap gap-3">
                {skillArray !== undefined && skillArray !== null ? (
                  skillArray?.map((skill) => {
                    return (
                      <p
                        key={skill?.skill_id}
                        className="bg-[#FBB017] text-white px-8 py-2 border-[1px] border-[#b87a00] base-rounded"
                      >
                        {skill?.skill_name}
                      </p>
                    );
                  })
                ) : (
                  <p className="bg-[#FBB017] text-white px-8 py-2 border-[1px] border-[#b87a00] base-rounded">
                    Empty
                  </p>
                )}
              </div>
            </div>
            <div className="socmed w-full flex flex-col gap-y-5 pt-6">
              <div className="flex gap-x-3 items-center">
                <img src={require("../../assets/img/mail.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {datas.email ? datas.email : `(Empty email)`}
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={require("../../assets/img/instagram.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {datas.akun_instagram !== "null" &&
                  datas.akun_instagram !== null
                    ? datas.akun_instagram
                    : `(Empty akun instagram)`}
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={require("../../assets/img/github.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {datas.akun_github !== "null" && datas.akun_github !== null
                    ? datas.akun_github
                    : `(Empty akun github)`}
                </p>
              </div>
            </div>
          </div>
          <ExperiencePortfolio />
        </section>
      </main>
      <Footer />
    </div>
  );
};
