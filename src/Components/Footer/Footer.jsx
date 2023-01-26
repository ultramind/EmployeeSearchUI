import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gapp-[8] grid grid-cols-5 items-center justify-center ">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[24px] text-white">
            <strong className="font-bold">Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7 ">
          We always make our seekers and comapanies find the best jobs and
          employers find the best candidates
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Comapany
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            About us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Account
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Support Team
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Contact Us
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] ">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">Career</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">Career</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Contact Info
        </span>
        <div className="">
          <small className="text-[14px] text-white ">
            udechukwuakachukw@gmail.com{" "}
            <AiFillInstagram className="text-blueColor" />
          </small>
          <div className="icons flex gap-4 py-[1rem]  ">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            <AiFillFacebook className="bg-white  p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor " />
            <AiFillTwitterCircle className="bg-white  p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
