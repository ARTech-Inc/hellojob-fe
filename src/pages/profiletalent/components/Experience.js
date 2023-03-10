import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Experience = () => {
  const { userId } = useParams();
  const [datas, setDatas] = useState({});
  const URL = `https://hellojob.up.railway.app`;
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${URL}/api/v1/users/${userId}`);
      const data = response.data.data;
      setDatas(data);
    };
    getUser();
  }, []);
  const workExperience = datas.work_experiences;

  return (
    <div className="experience-row flex flex-col  md:flex-row md:flex-wrap gap-6 max-sm:gap-0">
      {workExperience &&
        workExperience?.map((work) => {
          return work ? (
            <div className="border-b-[1px] border-[#E2E5ED] w-full h-52 flex pt-3">
              <div className="left md:w-[15%]">
                <img src={require("../../../assets/img/suitcase.png")} alt="" />
              </div>
              <div className="right md:w-[85%]">
                <div className="data-work mb-3">
                  <p className="text-[#1F2A36] font-semibold text-2xl">
                    {work?.posisi && work?.posisi}
                  </p>
                  <p className="text-[#46505C] text-xl">
                    {work?.nama_perusahaan && work?.nama_perusahaan}
                  </p>
                  <p className="text-[#9EA0A5] text-lg">
                    {work?.tanggal_masuk && work?.tanggal_masuk} -{" "}
                    {work?.tanggal_keluar && work?.tanggal_keluar}{" "}
                    <span>6 months</span>
                  </p>
                </div>
                <div className="description">
                  <p className="text-[#1F2A36] text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        })}
    </div>
  );
};
