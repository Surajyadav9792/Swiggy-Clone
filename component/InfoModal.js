import React from "react";

export default function InfoModal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-[90%] max-w-md transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
        }}
      >
        {/* Style block for animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}} />

        {/* Info Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5200]/10 text-[#ff5200]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-3 font-serif">
          {title || "Feature Scope"}
        </h3>

        {/* Message */}
        <p className="text-center text-gray-600 text-base leading-relaxed mb-8">
          {message || "This section is a visual placeholder for the clone. Please explore the Food Delivery section to see the full interactive experience!"}
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-[#ff5200] hover:bg-[#e04800] py-3.5 px-6 font-bold text-white shadow-lg shadow-[#ff5200]/25 transition-all hover:shadow-xl hover:shadow-[#ff5200]/30 active:scale-95 duration-200 cursor-pointer text-center text-base"
          >
            Got it, let's explore!
          </button>
        </div>
      </div>
    </div>
  );
}
