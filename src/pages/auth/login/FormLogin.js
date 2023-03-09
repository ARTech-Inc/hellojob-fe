import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrangeBtn } from "../../../components/OrangeBtn";
import illuminati from "../../../assets/img/illuminati.png";

export const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://hellojob.up.railway.app/api/v1/auth/login",
      data: loginData,
    })
      .then((result) => {
        // console.log(result.data.data);
        localStorage.setItem("@userLogin", JSON.stringify(result.data.data));
        alert(result.data.message);
        navigate("/home");
      })
      .catch((err) => {
        // console.log(err.response.data);
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  const showPw = () => {
    let x = document.getElementById("pwInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <form action="" onSubmit={handleLogin} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label for="">Email</label>
        <input
          onChange={(e) => {
            setLoginData({
              ...loginData,
              email: e.target.value,
            });
          }}
          type="email"
          placeholder="Masukan alamat email"
          className="py-5 px-3 base-rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label for="">Kata Sandi</label>
        <div className="flex pr-6 w-full justify-between base-rounded items-center bg-white">
          <input
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
            }}
            type="password"
            placeholder="Masukan kata sandi"
            className="py-5 px-3 w-full focus:outline-none"
            id="pwInput"
          />
          <img
            src={illuminati}
            alt="illuminati-eye"
            onClick={showPw}
            className="cursor-pointer w-6 h-6"
          />
        </div>
      </div>
      {validate.error && (
        <div className="error-message bg-red-200 text-red-500 p-5 rounded-lg font-bold italic">
          {validate.message}
        </div>
      )}
      <p className="text-end">Lupa kata sandi?</p>
      {/* <Link to="/"> */}
      <OrangeBtn text="Masuk" />
      {/* </Link> */}
    </form>
  );
};
