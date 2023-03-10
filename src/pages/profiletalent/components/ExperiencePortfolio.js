import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Experience } from "./Experience";

export const ExperiencePortfolio = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  // const dataPortfolio = userDataDetail[0] ? userDataDetail[0].portfolios : "";
  // const dataPortfolio = userDataDetail.portfolio;

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
  const dataPortfolio = datas.portfolio;
  const workExperience = datas.work_experiences;
  // console.log(workExperience);
  // const work = workExperience?.map((w) => {
  //   console.log(w);
  // });
  // console.log(work);
  const [tab, setTab] = useState("Portfolio");
  const handleClick = (index) => {
    setTab(index);
  };

  return (
    <div className="experience-portfolio w-full bg-white shadow-xl base-rounded h-[160vh] md:h-[200vh] px-5 py-8 flex flex-col gap-y-8">
      <div className="category-navigation flex justify-center items-center md:justify-start gap-x-3">
        <button
          onClick={() => handleClick("Portfolio")}
          className={tab === "Portfolio" ? "active" : "non-active"}
        >
          Portfolio
        </button>
        <button
          onClick={() => handleClick("Experience")}
          className={tab === "Experience" ? "active" : "non-active"}
        >
          Pengalaman kerja
        </button>
      </div>

      {tab === "Portfolio" ? (
        <div className="portfolio-row flex flex-col md:flex-row md:flex-wrap gap-6 max-sm:gap-0">
          {dataPortfolio &&
            dataPortfolio?.map((p) => {
              return p ? (
                <div
                  key={p.portfolio_id}
                  className="flex flex-col gap-y-3 w-72 h-64 max-sm:h-52 items-center justify-center"
                >
                  <div className="app-image w-full shadow-md h-40 flex justify-center items-center base-rounded">
                    <a href={`${p.link_repo}`}>
                      <img
                        src={
                          p
                            ? `https://hellojob.up.railway.app/images/${p.portfolio_images[0]?.filename}`
                            : ""
                        }
                        alt={p?.app_name}
                        className="w-full h-full base-rounded"
                      />
                    </a>
                  </div>
                  <p className="text-center text-lg max-sm:hidden">
                    {p.app_name}
                  </p>
                </div>
              ) : (
                ""
              );
            })}
        </div>
      ) : (
        <Experience />
      )}
    </div>
  );
};
