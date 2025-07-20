"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { Models } from "../components/models";
import { allMentalModels } from "../data";

export default function Home() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Redirect root to first model
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const firstModel = allMentalModels[0];
      if (firstModel) {
        router.replace(`/${firstModel.author}/${firstModel.slug}`);
      }
    }
  }, [router]);

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
