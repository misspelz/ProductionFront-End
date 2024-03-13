import { Outlet } from "react-router-dom";
import { Asidebar } from "./Asidebar";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div className="app_layout">
      <Header />
      <Asidebar />
      <main className="app_main">
        <Outlet />
      </main>
    </div>
  );
};
