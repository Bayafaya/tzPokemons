import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-[120px] mb-[60px] w-[360px] sm:w-[500px]  md:w-[760px] xl:w-[1200px] space-y-4">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
