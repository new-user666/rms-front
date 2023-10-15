"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Login from "./user/Login";
import { UserIcon } from "@/icons/home";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
// import "./styles/nprogress.css";

function Footer() {
  const router = useRouter();
  const [routerButtonClicked, setRouterButtonClicked] = useState(false);
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    routerButtonClicked ? NProgress.start() : null;
  }, [routerButtonClicked]);

  return (
    <footer className="bg-secondary text-white text-sm p-16">
      <div className="flex flex-wrap gap-7">
        <div className="w-3/4 ">
          <img
            src="/img/realia-txt.png" // Path to the image in the public folder
            alt="Realia Logo"
            className="h-10 md:h-12"
          />
        </div>
        <div className="font-light ">
          <p className="font-semibold">Address</p>
          <p>
            Darul Huda Islamic University <br />
            Hidaya Nagar, Chammad, Tirurangadi PO <br />
            Malappuram Dist. Pin: 676306, Kerala, India
            <br />
            <br />
            Email: asas@dhiu.in | Phone :+91494-2463155 <br />
            Fax: 0494 2460575
          </p>
          <div className=" py-2  my-1  flex gap-2   ">
            <button
              onClick={() => {
                setRouterButtonClicked(true);
                router.push("/login");
              }}
              className=" bg-white rounded-md px-5 py-2 text-black font-semibold "
            >
              {" "}
              Login{" "}
            </button>
            <button
              onClick={() => {
                setRouterButtonClicked(true);
                router.push("/program");
              }}
              className=" bg-white rounded-md px-5 py-2 text-black font-semibold "
            >
              Program
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5">&copy; 2023 Realia, All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
