import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataUsers } from "../../redux/actions/users";

export const EditBioForm = ({ bioData, setBioData, refetch }) => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, [refetch]);

  return (
    <div className="data-diri shadow-2xl w-full h-[90%] lg:h-[200vh] bg-white base-rounded p-5 flex flex-col gap-y-4">
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Data diri</h3>
      </div>

      <div className="flex flex-col gap-y-1 mb-3 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nama perusahaan :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              perusahaan: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.perusahaan
              ? userDataDetail.perusahaan
              : "Masukkan nama perusahaan"
          }
        />
      </div>

      <div className="flex flex-col gap-y-1 mb-3 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Bidang :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              bidang_perusahaan: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.bidang_perusahaan
              ? userDataDetail.bidang_perusahaan
              : "Masukan bidang perusahaan, ex : Financial"
          }
        />
      </div>

      <div className="flex flex-col gap-y-1 mb-3 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Domisili :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              domisili: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.domisili
              ? userDataDetail.domisili
              : "Masukkan domisili"
          }
        />
      </div>

      <div className="flex flex-col gap-y-1 mb-3 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Deskripsi singkat :
        </label>
        <textarea
          onChange={(e) => {
            setBioData({
              ...bioData,
              description: e.target.value,
            });
          }}
          name=""
          id=""
          cols="25"
          rows="5"
          placeholder="Tuliskan deskripsi singkat"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none "
        ></textarea>
      </div>

      <div className="flex flex-col gap-y-1 mb-3 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Email :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              email: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.email ? userDataDetail.email : "Masukkan email"
          }
        />
      </div>

      <div className="flex flex-col gap-y-1 mb-3 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Instagram :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              akun_instagram: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.akun_instagram
              ? userDataDetail.akun_instagram
              : "Masukkan Username IG"
          }
        />
      </div>

      <div className="flex flex-col gap-y-1 mb-3">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nomor Telepon :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              phone: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.phone
              ? userDataDetail.phone
              : "Masukkan nomor telepon"
          }
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="" className="text-[#9EA0A5]">
          Linkedin :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.akun_linkedin
              ? userDataDetail.akun_linkedin
              : "Masukkan username linkedin"
          }
        />
      </div>
    </div>
  );
};
