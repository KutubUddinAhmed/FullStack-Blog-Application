"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ContextProviderApp } from "@/context/context";
import Dashboard from "./AdminComponents/Dashboard";
// ICONS
import { MdDashboard, MdLogout, MdMenu, MdClose } from "react-icons/md";
import { BsBoundingBox } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import AddBlogs from "./AdminComponents/AddBlogs";
import ApiCards from "./ApiCards";
import FeedBackContact from "./AdminComponents/FeedBackContact";

function Sidebar() {
  const router = useRouter();
  const context = useContext(ContextProviderApp);
  const { setUserLogin }: any = context;
  const { selectedSideBarOption, setSelectedSideBarOption }: any = context;

  // State for toggling the sidebar on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const userData = Cookies.get("admin");
    if (userData) {
      setUserLogin(JSON.parse(userData));
    }
  }, [setUserLogin]);

  function LogOut() {
    document.cookie = "admin=; path=/;";
    setUserLogin({ logedinUser: "", token: "", is_logedin: false });
    router.push("/");
  }

  // Default option to have bg-gray-600
  useEffect(() => {
    if (!selectedSideBarOption) {
      setSelectedSideBarOption("option1");
    }
  }, [selectedSideBarOption, setSelectedSideBarOption]);

  // Sidebar options
  const SideBarOption = [
    { label: "Dashboard", value: "option1", icons: <MdDashboard /> },
    { label: "Blogs", value: "option2", icons: <FaRegPenToSquare /> },
    { label: "Contact", value: "option3", icons: <BsBoundingBox /> },
    { label: "Settings", value: "option4", icons: <GoGear /> },
  ];

  function handleOptionSelect(option: string) {
    setSelectedSideBarOption(option);
  }

  // Dynamically render content based on selected option
  function optionRenderContent() {
    switch (selectedSideBarOption) {
      case "option1":
        return <Dashboard />;
      case "option2":
        return <AddBlogs />;
      case "option3":
        return <FeedBackContact />;
      case "option4":
        return <p>Option 4 is selected</p>;
      default:
        return <Dashboard />;
    }
  }

  return (
    <main className="flex h-screen">
      {/* Toggle button for small screens */}
      <Button
        className="md:hidden p-4 text-2xl text-gray-700 dark:text-gray-300"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <MdClose /> : <MdMenu />}
      </Button>

      {/* Sidebar Component */}
      <section
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block bg-[#080616] w-[18%] md:w-[20%] lg:w-[15%] min-w-max p-4 rounded-r-md transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="text-white text-center mb-10 font-sans text-2xl md:text-xl lg:text-2xl">
          MyBlogs
        </p>
        <div className="flex flex-col h-[600px] justify-between">
          <div className="flex flex-col items-center space-y-4">
            {SideBarOption.map((option) => (
              <Button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-3/4 flex justify-start gap-4 min-w-[150px] text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                  selectedSideBarOption === option.value
                    ? "bg-gray-600 text-white"
                    : ""
                } text-sm md:text-base lg:text-md`}
              >
                <span className="text-lg md:text-xl lg:text-xl">
                  {option.icons}
                </span>
                {option.label}
              </Button>
            ))}
          </div>
          <Button
            onClick={LogOut}
            className="w-3/4 mx-auto flex items-center justify-start text-md font-semibold gap-4 text-red-500 dark:text-red-400 bg-white dark:bg-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 p-3 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base lg:text-lg"
          >
            <MdLogout className="text-lg md:text-xl lg:text-2xl" />
            Logout
          </Button>
        </div>
      </section>

      {/* Right component */}
      <section className="w-full md:w-[80%] lg:w-[85%] p-1 mx-[2px] bg-[#e3fef885] dark:bg-gray-900">
        {optionRenderContent()}
      </section>
    </main>
  );
}

export default Sidebar;
