import { useEffect } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Landing } from "@/pages/Landing";
import { FoodCloud } from "@/pages/FoodCloud";
import { PosCloud } from "@/pages/PosCloud";
import { Careers } from "@/pages/Careers";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="clouds/food" element={<FoodCloud />} />
          <Route path="clouds/pos" element={<PosCloud />} />
          <Route path="careers" element={<Careers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
