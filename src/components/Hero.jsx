import React from "react";

export default function Hero() {
  return (
    <header className="text-center py-12">
      <h1 className="text-4xl font-extrabold text-[#064e3b]">Charu Sood</h1>
      <p className="mt-4 text-lg text-[#065f46]">Frontend developer • React • UI/UX</p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-[#10b981] text-white rounded-md hover:bg-[#059669]"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-[#065f46] text-[#064e3b] rounded-md hover:bg-[#e6fff0]"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
