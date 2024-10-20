"use client";
import { ContextProviderApp } from "@/context/context";
import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const SmallDashboardCards = [
  {
    id: 1,
    Title: "Total Applications",
    SubTitle: 500,
    GrowthNumber: "+14% inc",
    className: "bg-blue-100 ",
  },
  {
    id: 2,
    Title: "Pending Applications",
    SubTitle: 120,
    GrowthNumber: "+8% inc",
    className: "bg-yellow-100",
  },
  {
    id: 3,
    Title: "Rejected Applications",
    SubTitle: 45,
    GrowthNumber: "-5% dec",
    className: "bg-red-100",
  },
];
const LargerDashboardCards = [
  {
    id: 1,
    Title: "Most Demanding Skills",
    className: "bg-cyan-100 ",
  },
  {
    id: 2,
    Title: "Top Companies Teck Stack",
    className: "bg-green-100",
  },
  {
    id: 3,
    Title: "Most Popular Programming Language",
    className: "bg-orange-100",
  },
];

function Dashboard() {
  const context = useContext(ContextProviderApp);
  const { adminImageClicked, setAdminImageClicked }: any = context;
  const { setUserLogin }: any = context;
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  // Admin Profile
  function OpenAdminProfile() {
    setAdminImageClicked(!adminImageClicked);
  }

  // Close modal when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setAdminImageClicked(false);
    }
  };

  useEffect(() => {
    if (adminImageClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [adminImageClicked]);

  // Get Admin Data
  useEffect(() => {
    const adminData = Cookies.get("admin");
    if (adminData) {
      setUserLogin(JSON.parse(adminData));
    }
  }, [setUserLogin]);

  // Logout Function
  function LogOut() {
    document.cookie = "admin=; path=/;";
    setUserLogin({
      logedinUser: "",
      token: "",
      is_logedin: false,
    });
    router.push("/");
  }

  return (
    <section className="relative">
      {/* top section */}
      <div className="flex items-center justify-between h-[50px]">
        <span className="text-xl font-semibold font-serif">Dashboard</span>
        <div className="flex justify-evenly w-1/3">
          <div className="flex shadow shadow-cyan-200 p-1 rounded">
            <input
              type="text"
              placeholder="Search..."
              className="mr-2.5 px-2 bg-gray-200 rounded-md"
            />
            <LuSearch
              className="px-1 cursor-pointer bg-blue-200 rounded-md hover:scale-105"
              size={40}
            />
          </div>
          <Image
            src="/companies/brand2.png"
            alt="AdminProfile"
            width={50}
            height={50}
            className="rounded-full bg-transparent cursor-pointer relative"
            onClick={OpenAdminProfile}
          />
        </div>

        {/* Modal For Admin Profile */}
        {adminImageClicked && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"></div>

            {/* Modal */}
            <div
              ref={modalRef}
              className="absolute right-12 top-11 z-20 mt-2 shadow-gray-400 bg-white shadow-lg rounded-lg p-4 w-64"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/companies/brand2.png"
                  alt="Admin Image"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center mb-6 ">
                <p className="font-semibold">Admin Name</p>
                <p className="text-gray-500">email@email.com</p>
              </div>
              <Button
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                onClick={LogOut}
              >
                Logout
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Small Cards section */}
      <div className="flex flex-row flex-wrap ">
        {SmallDashboardCards.map((cards) => (
          <div
            key={cards.id}
            className={`bg-white shadow-md p-5 rounded-lg w-[300px] mx-auto my-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${cards.className}`}
          >
            <h2 className="mb-2 text-lg font-semibold">{cards.Title}</h2>
            <p className="text-gray-600">{cards.SubTitle}</p>
            <span>{cards.GrowthNumber}</span>
          </div>
        ))}
      </div>

      {/* Larger Cards Section */}
      <div className="flex flex-row flex-wrap ">
        {LargerDashboardCards.map((cards) => (
          <div
            key={cards.id}
            className={`bg-white shadow-md p-5 rounded-lg w-[300px] mx-auto my-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${cards.className}`}
          >
            <h2 className="mb-2 text-lg font-semibold text-center text-balance">
              {cards.Title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
