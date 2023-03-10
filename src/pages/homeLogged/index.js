import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";
import { TabTitle } from "../../utils/GeneralFunc";
import { PaginationBar } from "./components/PaginationBar";
import { TalentList } from "./TalentList";

export const HomeLogged = () => {
  const [search, setSearch] = useState("");
  const [catJobStatus, setCatJobStatus] = useState("");
  const [refetchCatJobStatus, setRefetchCatJobStatus] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDataUsers(`?search=${search}`));
  // });

  // useEffect(() => {
  //   dispatch(getDataUsers(`?catJobStatus=${catJobStatus}`));
  // }, [refetchCatJobStatus, catJobStatus]);

  TabTitle("HelloJob - Home");
  return (
    <>
      <nav className="navbar-mobile w-full h-[10vh] md:hidden flex px-3 items-center justify-center fixed top-0 left-0 bg-white z-20 shadow-2xl">
        <p className="text-purple text-xl cursor-pointer font-bold">HelloJob</p>
      </nav>
      <Navbar />
      <main className="w-full h-[300vh] pt-16 md:pt-20 bg-[#E2E5ED] flex flex-col gap-y-8">
        <header className="bg-purple w-full h-[15vh] md:h-[20vh] flex items-center px-3 md:px-32 text-2xl font-bold text-white">
          Top Jobs
        </header>
        <section className="searchbar-row w-full h-[20vh] flex justify-center px-3 md:px-32">
          <div className="searchbar bg-white w-full h-full base-rounded flex items-center">
            <div className="dropdown flex items-center justify-center w-[30%] h-full rounded-tr-md rounded-br-md gap-x-1 md:gap-x-3">
              <img src={require("../../assets/img/sort.png")} alt="" />
              <p className="cursor-pointer" tabIndex={0}>
                Sort
              </p>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="cursor-pointer">
                  <p>Sort by Skill</p>
                </li>
                <li className="cursor-pointer">
                  <p
                    onClick={() => {
                      setRefetchCatJobStatus(true);
                      setCatJobStatus("Freelance");
                    }}
                  >
                    Sort by Freelance
                  </p>
                </li>
                <li className="cursor-pointer">
                  <p
                    onClick={() => {
                      setRefetchCatJobStatus(true);
                      setCatJobStatus("Fulltime");
                    }}
                  >
                    Sort by Fulltime
                  </p>
                </li>
                <li className="cursor-pointer">
                  <p
                    onClick={() => {
                      setRefetchCatJobStatus(true);
                      setCatJobStatus("");
                    }}
                  >
                    All
                  </p>
                </li>
              </ul>
            </div>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              className="h-full focus:outline-none px-3 md:px-6 rounded-tr-md rounded-br-md border-l-[1px] border-[#9EA0A5] md:w-[80%]"
              placeholder="Search talent"
            />
          </div>
        </section>
        <TalentList
          search={search}
          catJobStatus={catJobStatus}
          refetchCatJobStatus={refetchCatJobStatus}
        />
        <PaginationBar />
      </main>
      <Footer />
    </>
  );
};
