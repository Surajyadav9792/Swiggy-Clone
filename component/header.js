import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import InfoModal from "./InfoModal";

export default function Header (){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({ title: "", message: "" });
    const [showWelcomeToast, setShowWelcomeToast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeToast(true);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const openScopeModal = (title, message) => {
        setModalConfig({ title, message });
        setIsModalOpen(true);
    };

    return (
        <>
        <header className="bg-[#ff5200] font-serif">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 md:py-8 container mx-auto">
            <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Swiggy Logo"></img>
            <div className="flex flex-wrap justify-center text-white gap-4 md:gap-10 text-sm md:text-base items-center">
                    <a target="_blank" rel="noreferrer" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                     <a target="_blank" rel="noreferrer" href="https://partner.swiggy.com/login#/swiggy" >Partner with us</a>
                     <a className="border border-white flex items-center rounded-2xl py-2 md:py-3 px-4" target="_blank" rel="noreferrer" href="https://www.swiggy.com/mobile-app" >Get the app</a>
                     <a className="border border-black bg-black rounded-2xl flex items-center py-2 md:py-3 px-4" target="_blank" rel="noreferrer" href="https://www.swiggy.com/auth" >Sign in</a>
            </div>
         </div>

           <div className="pt-10 md:pt-16 pb-8 relative">
            <div className="max-w-[90%] md:max-w-[60%] text-3xl md:text-5xl text-white font-bold container mx-auto text-center px-4">Order food & groceries. Discover best restaurants. Swiggy it!</div>
            <div>
                <img className="hidden lg:block h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Veggies Decor"></img>
                <img className="hidden lg:block h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Sushi Decor"></img>
              <div className="max-w-[90%] md:max-w-[70%] container mx-auto flex flex-col md:flex-row text-lg md:text-2xl mt-10 gap-4 px-4 justify-center items-center">
                <input className="w-full md:w-[40%] border border-white bg-white rounded-2xl px-6 py-3 md:py-4" placeholder="Delhi,India"></input> 
                <input className="w-full md:w-[55%] border border-white bg-white rounded-2xl px-6 py-3 md:py-4" placeholder="Search for restaurant,item or more"></input> 
              </div>
            </div>

            {/* Navigation Options Section */}
            <div className="max-w-[90%] md:max-w-[80%] container mx-auto flex flex-col md:flex-row gap-6 justify-center mt-12 px-4">
              
              {/* FOOD DELIVERY (Functional Clone) */}
              <div className="relative flex-1 transition-transform duration-300 hover:scale-[1.03]">
                <Link to="/restaurant">
                  <img className="w-full rounded-3xl shadow-lg border border-white/10" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Food Delivery"></img>
                  <span className="absolute top-4 right-4 bg-[#1BA672] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md animate-pulse">
                    🔥 Interactive Demo
                  </span>
                </Link>
              </div>
              
              {/* INSTAMART (Visual Placeholder) */}
              <div 
                onClick={() => openScopeModal(
                  "Instamart Section", 
                  "Instamart is currently a visual placeholder in this portfolio clone. To view my fully functional components, checkout page, and menus, please click on the 'Food Delivery' section!"
                )}
                className="relative flex-1 cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <img className="w-full rounded-3xl shadow-lg border border-white/10" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="Instamart"></img>
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Visual Prototype
                </span>
              </div>
              
              {/* DINEOUT (Visual Placeholder) */}
              <div 
                onClick={() => openScopeModal(
                  "Dineout Section", 
                  "Dineout is currently a visual placeholder in this portfolio clone. To view my fully functional components, checkout page, and menus, please click on the 'Food Delivery' section!"
                )}
                className="relative flex-1 cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              >
                <img className="w-full rounded-3xl shadow-lg border border-white/10" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="Dineout"></img>
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Visual Prototype
                </span>
              </div>
              
            </div>
        </div>
        <div></div>
        </header>

        {/* Global Cloned Experience Modal */}
        <InfoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={modalConfig.title}
            message={modalConfig.message}
        />

        {/* Portfolio Welcome Toast */}
        {showWelcomeToast && (
          <div 
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300"
            style={{ 
              animation: "slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)"
            }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes slideInRight {
                from {
                  transform: translateX(120%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
            `}} />
            <div className="flex justify-between items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff5200]/10 text-[#ff5200]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 font-serif">Swiggy Clone Project</h4>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Hi! I'm <strong>Suraj</strong>, the developer of this clone. Click on the <strong>Food Delivery</strong> section to see the fully functional interactive flow!
                </p>
              </div>
              <button 
                onClick={() => setShowWelcomeToast(false)} 
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 justify-end">
              <Link 
                to="/restaurant" 
                onClick={() => setShowWelcomeToast(false)} 
                className="bg-[#ff5200] hover:bg-[#e04800] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-[#ff5200]/20 text-center"
              >
                Explore Delivery
              </Link>
            </div>
          </div>
        )}
        </>
    )
}