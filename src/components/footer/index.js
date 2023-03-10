import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-purple w-full h-[40vh] px-3 md:px-32 ">
      <div className="flex flex-col text-white gap-y-6 border-b-[2px] border-white py-10">
        <div className="text-2xl">
          <p>HelloJob</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
      </div>
      <div className="text-white flex justify-between pt-5">
        <p>2020 HelloJob. All right reserved</p>
        <div className="flex gap-x-3">
          <p>
            {/* <a href="whatsapp://send?text=Hello&phone=+6285219891357"> */}
            <a href="https://api.whatsapp.com/send?phone=6285219891357">
              +62 852 1989 1357
            </a>
          </p>
          <p>
            <a href="mailto:artechteam04@gmail.com">artechteam04@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
