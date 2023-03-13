import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";
import { EditBioForm } from "./EditBioForm";

export const EditProfileRecruiter = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const dispatch = useDispatch();
  const [refetch, setRefetch] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const [bioData, setBioData] = useState({
    perusahaan: "",
    bidang_perusahaan: "",
    domisili: "",
    description: "",
    email: "",
    akun_instagram: "",
    phone: "",
    akun_linkedin: "",
  });

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, [refetch]);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const dataEdit = new FormData();
    dataEdit.append("ava", image);
    dataEdit.append("perusahaan", bioData.perusahaan);
    dataEdit.append("bidang_perusahaan", bioData.bidang_perusahaan);
    dataEdit.append("domisili", bioData.domisili);
    dataEdit.append("description", bioData.description);
    dataEdit.append("email", bioData.email);
    dataEdit.append("akun_instagram", bioData.akun_instagram);
    dataEdit.append("phone", bioData.phone);
    dataEdit.append("akun_linkedin", bioData.akun_linkedin);

    axios({
      method: "PATCH",
      url: `https://hellojob.up.railway.app/api/v1/users/${userId}`,
      data: dataEdit,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        alert(result.data.message);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <nav className="navbar-mobile w-full h-[10vh] md:hidden flex px-3 items-center justify-center fixed top-0 left-0 bg-white z-20 shadow-2xl">
        <p className="text-purple text-xl cursor-pointer font-bold">HelloJob</p>
      </nav>
      <Navbar />
      <form onSubmit={handleEdit}>
        <main className="h-[320vh] sm:h-[700vh] lg:h-[260vh] w-full bg-base pt-28 max-sm:pt-16 px-3 flex flex-col gap-y-5 md:gap-x-6 md:flex-row md:px-32 md:pt-40">
          <section className="w-full md:w-[60%] h-[100vh] md:h-[120vh] flex flex-col gap-y-5 sm:mb-10 max-sm:mt-10">
            <div className="profile-card shadow-2xl bg-white w-full base-rounded h-[80%] md:h-[150vh] px-5 py-5 flex flex-col gap-y-8 max-sm:h-full">
              <div className="bio flex flex-col gap-y-3">
                <div className="w-full flex flex-col justify-center items-center">
                  <img
                    src={
                      imagePreview
                        ? imagePreview
                        : userDataDetail?.avatar !== null
                        ? `https://hellojob.up.railway.app/images/${userDataDetail?.avatar}`
                        : `http://hellojobb.vercel.app/images/default-avatar.jpg`
                    }
                    alt={userDataDetail.name}
                    className="w-32 h-32 rounded-full mb-3"
                  />
                  <label
                    htmlFor="edit"
                    className="flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <img src={require("../../assets/img/pencil.png")} alt="" />
                    <p className="text-[#9EA0A5]">Edit</p>
                  </label>
                  <input
                    id="edit"
                    type="file"
                    onChange={(e) => onImageUpload(e)}
                    className="my-[10px] hidden"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-[#1F2A36]">
                    {userDataDetail ? userDataDetail.perusahaan : ""}
                  </h2>
                  <p className="text-lg text-[#1F2A36]">
                    {userDataDetail.bidang_perusahaan !== ""
                      ? userDataDetail.bidang_perusahaan
                      : "(Empty bidang_perusahaan)"}
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
                  <p className="text-[#9EA0A5] pt-2">
                    {userDataDetail.description !== "null" &&
                    userDataDetail.description !== null
                      ? userDataDetail.description
                      : "(Empty description)"}
                  </p>
                </div>
              </div>
              <div className="bg-red-200 border-[2px] border-red-400 w-72 h-28 rounded-xl p-2 flex flex-col justify-center text-red-800">
                <p>Caution!!</p>
                <p>Don't edit photos and other data at the same time!!</p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-purple text-white base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200 max-sm:hidden"
            >
              Simpan
            </button>
            <button
              onClick={() => navigate("/home")}
              className="bg-transparent text-purple base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-purple hover:text-white duration-200 max-sm:hidden"
            >
              Kembali
            </button>
          </section>
          <section className="w-full h-[450vh] sm:h-[500vh] md:h-[200vh] flex flex-col gap-y-5 mb-10">
            <EditBioForm
              bioData={bioData}
              setBioData={setBioData}
              refetch={refetch}
            />
            <button
              type="submit"
              className="bg-purple text-white base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200 sm:hidden"
            >
              Simpan
            </button>
            <button
              onClick={() => navigate("/home")}
              className="bg-transparent text-purple base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-purple hover:text-white duration-200 sm:hidden"
            >
              Kembali
            </button>
          </section>
        </main>
      </form>
      <Footer />
    </>
  );
};
