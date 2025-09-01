import React from 'react';
import heroSectionImg from "../assets/hero_section_img.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-center p-16 px-8 animate-[fadeInUp_0.5s_ease-out] h-screen w-screen md:flex-row md:justify-between md:p-16 md:px-20">
      <div className="max-w-[40rem]">
        <h1 className="text-[34px] font-bold leading-[1.2]">
          Master Tech Skills with Peer-to-Peer Learning
        </h1>
        <p className="text-[#64748b] mt-4">
          Join a global community to learn cutting-edge tech skills, collaborate
          on real-world projects, and accelerate your career with expert
          mentorship.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-[#FF6A28] text-white px-6 py-3 rounded-full font-semibold shadow-[0_10px_15px_rgba(0,0,0,0.1)] border-none cursor-pointer transition-all duration-300 ease hover:bg-[#00C7B1]">
            Explore Talent
          </button>
          <button className="bg-[#FF6A28] text-white px-6 py-3 rounded-full font-semibold shadow-[0_10px_15px_rgba(0,0,0,0.1)] border-none cursor-pointer transition-all duration-300 ease hover:bg-[#00C7B1]">
            Hire as Student
          </button>
          <button className="bg-[#FF6A28] text-white px-6 py-3 rounded-full font-semibold shadow-[0_10px_15px_rgba(0,0,0,0.1)] border-none cursor-pointer transition-all duration-300 ease hover:bg-[#00C7B1]">
            Try Free
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src={heroSectionImg}
          alt="Education"
          className="w-[35rem] rounded-xl transition-transform duration-300 ease hover:scale-[1.03]"
        />
      </div>
    </section>
  );
};

export default HeroSection;