"use client";

import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { Models } from "../components/models";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar onMenuClick={handleMenuClick} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        <main className="flex-1 md:ml-0 min-h-[calc(100vh-4rem)] flex">
          <div className="flex-1 flex items-center justify-center pt-6">
            <Models />
          </div>
        </main>
      </div>
    </div>
  );
}
