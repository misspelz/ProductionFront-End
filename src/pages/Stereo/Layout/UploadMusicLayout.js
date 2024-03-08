import React, { Children, useEffect, useState } from "react";
import Sider from "./Sider";
import Sidebar from "./Sidebar";
import Home from "../Pages/Home";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Header1 from "../Components/Header1";
import DesktopNavbar from "./DesktopNavbar";
import RightSider from "./RightSider";
import UploadMusicSider from "./UploadMusicSider";

export default function UploadMusicLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseIcon = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const x = window.matchMedia("(max-width: 700px)");
    function myFunction(e) {
      setIsCollapsed(false);
    }
    if (x.matches) {
      myFunction();
    } else {
      setIsCollapsed(true);
    }
  }, []);
  return (
    <div className="w-auto">
      {/* <div className="ml-90">
        <Header1 />
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 bg-gray-100 w-full relative">
        <div
          className={isCollapsed ? "ctrl-btn" : "ctrl-btn lst"}
          // className={`sticky top-0 left-0`}
          onClick={handleCollapseIcon}>
          {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </div>
        {isCollapsed ? (
          <div class="relative">
            <Sider />
          </div>
        ) : null}
        <div class="lg:col-span-2">
          <Home />
        </div>
        <div class="h-32 rounded-lg bg-gray-200"></div>
      </div> */}

      <div className="sm:grid sm:grid-cols-12 hidden bg-[#F5F5F5]">
        {isCollapsed ? (
          <div className="col-span-2 top-0">
            <Sider />
          </div>
        ) : null}
        <div className="col-span-10">
          <DesktopNavbar />
          <div className="grid grid-cols-12">
            <div className="col-span-7">{children}</div>
            <div className="col-span-5">
              <UploadMusicSider />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div
          className={isCollapsed ? "ctrl-btn" : "ctrl-btn lst"}
          // className={`sticky top-0 left-0`}
          onClick={handleCollapseIcon}>
          {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </div>
        {isCollapsed ? (
          <div className="relative">
            <Sider />
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
