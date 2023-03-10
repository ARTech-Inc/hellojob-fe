import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";

export const Hire = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  // const loadingUser = userDetail.loading;
  // const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);
  console.log(userDataDetail);

  const dataSkill = userDataDetail.skills ? userDataDetail.skills : "";

  const resDataSkill = dataSkill
    ? dataSkill.map((s) => {
        return s;
      })
    : "";
  return (
    <>
      <nav className="navbar-mobile w-full h-[10vh] md:hidden flex px-3 items-center justify-center fixed top-0 left-0 bg-white z-20 shadow-2xl">
        <p className="text-purple text-xl cursor-pointer font-bold">HelloJob</p>
      </nav>
      <Navbar />
      <main className="w-full bg-base h-[300vh] md:h-[200vh] pt-28 px-3 flex flex-col md:flex-row md:px-32 gap-16">
        <div className="profile-card bg-white w-full md:w-[60%] base-rounded h-[130vh] px-5 py-5 flex flex-col gap-y-8">
          <div className="bio flex flex-col gap-y-3 ">
            <div className=" w-full flex justify-center items-center">
              <img
                src={
                  userDataDetail.avatar
                    ? `https://hellojob.up.railway.app/images/${userDataDetail.avatar}`
                    : "http://localhost:3000/images/default-avatar.jpg"
                }
                alt={userDataDetail.name}
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[#1F2A36]">
                {userDataDetail ? userDataDetail.name : ""}
              </h2>
              <p className="text-lg text-[#1F2A36]">
                {userDataDetail.job_desk !== ""
                  ? userDataDetail.job_desk
                  : "(Empty job desk)"}
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
                {userDataDetail.description
                  ? userDataDetail?.description
                  : "(Empty description)"}
              </p>
            </div>
          </div>
          <div className="skill w-full flex flex-col gap-y-3">
            <h2 className="text-2xl font-bold text-[#1F2A36]">Skill</h2>
            <div className="flex flex-wrap gap-3">
              {resDataSkill
                ? resDataSkill.map((skill) => {
                    return skill ? (
                      <p className="bg-[#FBB017] text-white px-8 py-2 border-[1px] border-[#b87a00] base-rounded">
                        {skill.skill_name}
                      </p>
                    ) : (
                      <p className="bg-[#FBB017] text-white px-8 py-2 border-[1px] border-[#b87a00] base-rounded">
                        Empty
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <section className="w-full flex flex-col h-[130vh] gap-y-6 p-4">
          <div className="flex flex-col gap-y-5 pb-8">
            <h2 className="text-4xl">
              Hubungi{" "}
              <span className="font-bold">
                {userDataDetail ? userDataDetail.name : ""}
              </span>
            </h2>
            <p>
              Coba lebih dekat dengan talent kami. Dapatkan talent terbaik kami
              sekarang juga!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label for="">Tujuan tentang pesan ini</label>
            <input
              type="text"
              placeholder="Project"
              className="p-5 base-rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="">Pesan</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Deskripsikan/jelaskan lebih detail"
              className="p-5 base-rounded"
            ></textarea>
          </div>
          <button className="bg-orange py-5 base-rounded text-white font-bold">
            Kirim
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};
