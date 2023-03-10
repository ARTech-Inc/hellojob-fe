import React from "react";
import { useNavigate } from "react-router-dom";
import image3 from "../../../assets/img/lp-3.png";

export const Section3 = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-y-6 md:flex-row w-full md:gap-x-10 md:h-[80vh]">
      <div className="flex flex-col gap-y-6 md:w-1/2 justify-center">
        <h2 className="text-utama text-3xl md:text-4xl font-bold">
          Skill Talent
        </h2>
        <p className="text-second">
          Skill merupakan hal paling mendasar yang harus dimiliki oleh talent
          kami di Hellojob. Cek skill yang perlu Anda dapat dari talent kami.
        </p>
        <ul className="h-[30vh] flex flex-col flex-wrap gap-y-6">
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>Kotlin</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>Java</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>PHP</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>Golang</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>C++</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>Ruby</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-orange.png")} alt="" />
            <p>60+ bahasa dan teknologi lainnya.</p>
          </div>
        </ul>
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="bg-purple base-rounded text-white w-48 px-1 py-3 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200"
        >
          Cek Sekarang
        </button>
      </div>
      <div
        className="w-full h-[50vh] md:h-full bg-cover bg-no-repeat md:w-1/2 justify-center"
        style={{ backgroundImage: `url(${image3})` }}
      ></div>
    </section>
  );
};
