"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ContextProviderApp } from "@/context/context";

function Sidebar() {
  const router = useRouter();

  const context = useContext(ContextProviderApp);

  const { setUserLogin }: any = context;

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

  // Creating components option in an array for mapping purpose inside the sidebar

  const SideBarOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ];

  // When click on the options button

  const { selectedSideBarOption, setSelectedSideBarOption }: any = context;

  function handleOptionSelect(option: string) {
    setSelectedSideBarOption(option);
  }

  // dynamacally handling the rendered contents
  function optionRenderContent() {
    switch (selectedSideBarOption) {
      case "option1":
        return <p>Option 1 is selected</p>;
      case "option2":
        return <p>Option 2 is selected</p>;
      case "option3":
        return <p>Option 3 is selected</p>;
      case "option4":
        return <p>Option 4 is selected</p>;

      default:
        return <p>Option 1 is selected</p>;
    }
  }

  return (
    <main className="flex h-screen">
      {/* Sidebar Component */}
      <section className="bg-[#080616] dark:bg-gray-800 w-1/3 min-w-max p-4 rounded-r-md">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col items-center space-y-4">
            {SideBarOption.map((option) => (
              <Button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-3/4 text-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                  selectedSideBarOption === option.value
                    ? "bg-gray-700 text-white"
                    : ""
                }`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        <Button
          onClick={LogOut}
          className="w-3/4 mx-auto text-left text-red-500 dark:text-red-400 bg-white dark:bg-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 p-3 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </Button>
      </section>

      {/* right component */}

      <section className="w-2/3 p-4 mx-[2px]">
        <div className="p-3 border-red-700 border-2 min-h-full">
          <div className="text-center text-gray-700 dark:text-gray-300">
            {/* Components rendered when click on the sidebar option */}
            {optionRenderContent()}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sidebar;
