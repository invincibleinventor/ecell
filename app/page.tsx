import React from 'react';

/**
 * E-CELL PIXEL PERFECT RECONSTRUCTION
 * Rebuilt section-by-section to match original screenshots.
 */

const ECellFinal = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden selection:bg-purple-200">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&family=JetBrains+Mono&display=swap');
          
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-mono { font-family: 'JetBrains Mono', monospace; }

          /* Custom Hero Shape (The Green Blob) */
          .hero-blob {
            border-radius: 140px 60px 140px 40px;
          }

          /* Achievement Folder Card Shape (With Tab) */
          .folder-clip {
            clip-path: polygon(0 0, 72% 0, 80% 12%, 100% 12%, 100% 100%, 0 100%);
          }

          /* Sponsor Card Technical Cut */
          .sponsor-clip {
            clip-path: polygon(14% 0, 100% 0, 100% 86%, 86% 100%, 0 100%, 0 14%);
          }

          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}
      </style>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-screen w-full bg-white pt-6">
        <nav className="relative z-50 flex items-center justify-between px-8 lg:px-20">
          <div className="flex gap-4">
            <button className="px-7 py-3 bg-white border border-gray-100 rounded-full text-[13px] font-poppins font-medium shadow-sm hover:shadow-md transition-shadow">Events +</button>
            <button className="px-7 py-3 bg-white border border-gray-100 rounded-full text-[13px] font-poppins font-medium shadow-sm flex items-center gap-2">Teams <span className="text-[10px] opacity-60">↴</span></button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-[26px] font-montserrat font-bold tracking-[0.4em] text-[#1a1a1a]">E CELL</div>
          <div className="flex items-center gap-12">
            <button className="flex items-center gap-3 text-sm font-poppins font-semibold">Menu <div className="flex flex-col gap-1.5 w-6"><div className="h-[2px] bg-black w-full"></div><div className="h-[2px] bg-black w-3/4 self-end"></div></div></button>
            <span className="hidden md:block text-sm font-poppins font-semibold cursor-pointer">About us</span>
          </div>
        </nav>

        <div className="px-8 lg:px-20 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 relative">
            <div className="hero-blob w-full max-w-[520px] aspect-[1.1/1] bg-[#22E066] shadow-[0_50px_100px_-20px_rgba(34,224,102,0.25)]"></div>
          </div>
          <div className="lg:col-span-7 font-montserrat text-[#1D1D1D] uppercase">
            <h1 className="text-[75px] md:text-[110px] lg:text-[145px] font-light leading-[0.82] tracking-tighter">Empower</h1>
            <div className="flex flex-col md:flex-row md:items-end gap-16 my-8">
              <div className="flex items-center gap-10 font-poppins mb-4">
                <div><p className="text-3xl font-bold">320M<span className="text-purple-500">+</span></p><p className="text-[10px] text-gray-400 font-black tracking-widest mt-1">BUSINESS</p></div>
                <div className="w-[1px] h-12 bg-gray-100"></div>
                <div><p className="text-3xl font-bold">590K<span className="text-purple-500">+</span></p><p className="text-[10px] text-gray-400 font-black tracking-widest mt-1">HAPPY CLIENT</p></div>
              </div>
              <h1 className="text-[75px] md:text-[110px] lg:text-[145px] font-light leading-[0.82] tracking-tighter">Ideate</h1>
            </div>
            <h1 className="text-[75px] md:text-[110px] lg:text-[145px] font-light leading-[0.82] tracking-tighter">Incubate</h1>
            <div className="text-right pr-16">
              <h1 className="text-[75px] md:text-[110px] lg:text-[145px] font-light leading-[0.82] tracking-tighter">Innovate</h1>
            </div>
            
            <div className="mt-12 flex justify-center lg:pr-48">
              <div className="bg-[#111] rounded-full p-2 flex items-center gap-5 pl-8 pr-3 shadow-2xl">
                <span className="text-white text-sm font-poppins font-semibold">Discover more</span>
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-[#111]"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-[#111]"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-500 border-2 border-[#111]"></div>
                </div>
                <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white text-lg">→</div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO WAVE: Rising from bottom right */}
        <div className="absolute bottom-0 left-0 w-full h-[320px] pointer-events-none translate-y-2">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <path fill="#151515" d="M0,320 L1440,320 L1440,80 C1150,80 950,280 650,280 L0,280 Z"></path>
          </svg>
        </div>
      </section>

      {/* --- SECTION 2: ACHIEVEMENTS --- */}
      <section className="bg-[#151515] pt-12 pb-48 relative">
        <div className="flex flex-col items-center mb-20">
          <div className="bg-[#222] p-1.5 rounded-full flex gap-1 border border-white/5 mb-10">
            <button className="px-8 py-2 bg-white text-black rounded-full text-xs font-bold shadow-lg">Achievements</button>
            <button className="px-8 py-2 text-gray-500 text-xs font-bold">Speakers</button>
          </div>
          <h2 className="text-5xl md:text-7xl font-montserrat text-white font-medium tracking-tight">Tagline - Lorem Ipsum</h2>
        </div>

        <div className="flex gap-10 px-8 lg:px-20 overflow-x-auto no-scrollbar pb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[460px] bg-[#1c1c1c] border border-white/10 rounded-[45px] p-6 flex flex-col">
              <div className="relative h-[300px] bg-[#282828] folder-clip rounded-[32px] overflow-hidden">
                <div className="absolute top-0 right-0 w-[30%] h-[13%] bg-[#1c1c1c] rounded-bl-[28px]"></div>
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
              </div>
              <div className="p-8 flex items-center justify-between mt-4">
                <h3 className="text-white text-3xl font-montserrat font-light">Lorem Ipsum</h3>
                <button className="bg-[#7C5CFF] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-3 hover:scale-105 transition-transform">
                  See more <span className="text-xs">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENT WAVE: The valley/dip curve */}
        <div className="absolute bottom-0 left-0 w-full h-[280px] pointer-events-none translate-y-2">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <path fill="#ffffff" d="M0,320 L1440,320 L1440,320 C1150,320 1000,180 720,180 C440,180 290,320 0,320 Z"></path>
          </svg>
        </div>
      </section>

      {/* --- SECTION 3: ABOUT US --- */}
      <section className="bg-white pt-32 pb-40 px-8 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="flex flex-col gap-6">
            <span className="px-6 py-2 border border-purple-100 text-purple-600 rounded-full text-[12px] font-black bg-purple-50/50 w-fit tracking-wider">About us</span>
            <h2 className="text-6xl md:text-7xl font-montserrat font-medium text-[#111] tracking-tighter">Lorem Ipsum</h2>
          </div>
          <button className="bg-[#111] text-white rounded-full px-10 py-4 text-sm font-bold flex items-center gap-4 mt-6 md:mt-0 group hover:pr-8 transition-all">
            Download Now <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg group-hover:bg-white group-hover:text-black transition-all">↗</div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-square bg-[#E8E8E8] rounded-[70px] shadow-inner"></div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-12 pb-16 border-b border-gray-100 mb-16">
              <div><p className="text-4xl font-bold font-poppins">320 M<span className="text-purple-500">+</span></p><p className="text-[11px] text-gray-400 font-black uppercase mt-2 tracking-widest">Business</p></div>
              <div><p className="text-4xl font-bold font-poppins">590 K<span className="text-purple-500">+</span></p><p className="text-[11px] text-gray-400 font-black uppercase mt-2 tracking-widest">Happy Client</p></div>
              <div><p className="text-4xl font-bold font-poppins">$438 B<span className="text-purple-500">+</span></p><p className="text-[11px] text-gray-400 font-black uppercase mt-2 tracking-widest">Revenue</p></div>
            </div>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-6 font-montserrat tracking-tight">E CELL SASTRA APP</h4>
                <p className="text-gray-400 text-[15px] leading-[1.8] font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6"><div className="w-6 h-6 bg-black rounded-md shadow-lg shadow-black/20"></div><h4 className="font-bold text-xl font-montserrat tracking-tight">E POD</h4></div>
                <p className="text-gray-400 text-[15px] leading-[1.8] font-poppins mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="text-purple-600 text-sm font-black flex items-center gap-3 group">Listen Now <span className="w-5 h-5 border-2 border-purple-600 rounded-full flex items-center justify-center text-[10px] group-hover:bg-purple-600 group-hover:text-white transition-all">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: SPONSORS --- */}
      <section className="bg-white py-32 px-8 lg:px-20 overflow-hidden">
        <div className="flex justify-center mb-24">
          <div className="bg-white px-20 py-6 rounded-[50px] shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-gray-50">
            <h2 className="text-7xl font-montserrat font-medium text-purple-500 tracking-tighter">Sponsors</h2>
          </div>
        </div>

        <div className="flex gap-12 overflow-x-auto no-scrollbar pb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`min-w-[400px] aspect-[3/4.5] sponsor-clip p-[2px] ${i === 2 ? 'bg-purple-500' : 'bg-purple-100'}`}>
              <div className={`w-full h-full sponsor-clip ${i === 2 ? 'bg-purple-500' : 'bg-white'} relative flex flex-col items-center justify-end pb-16 transition-colors duration-500`}>
                {/* Tech Line Accents */}
                <div className={`absolute top-10 right-10 w-24 h-12 border-t border-r border-dashed ${i === 2 ? 'border-white/30' : 'border-purple-200'}`}></div>
                <div className={`absolute bottom-10 left-10 w-24 h-12 border-b border-l border-dashed ${i === 2 ? 'border-white/30' : 'border-purple-200'}`}></div>
                
                <span className={`font-mono text-2xl tracking-[0.4em] font-medium ${i === 2 ? 'text-white' : 'text-purple-600'}`}>MALCOLM</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: FOOTER --- */}
      <footer className="bg-[#0a0a0a] text-white pt-40 pb-16 px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-6xl font-montserrat font-medium leading-[1.15] mb-8 tracking-tighter">Do you have any<br/>questions?</h2>
            <p className="text-gray-500 font-poppins text-lg mb-12">Feel free to send us your questions.</p>
            <div className="flex gap-5 max-w-lg">
              <input type="text" placeholder="Write your questions" className="bg-[#141414] border border-white/5 rounded-[22px] px-10 py-5 w-full focus:outline-none focus:border-purple-500/50 transition-all font-poppins" />
              <button className="bg-[#B53191] text-white px-12 py-5 rounded-[22px] font-poppins font-black hover:brightness-110 shadow-2xl shadow-pink-900/30 transition-all">Send</button>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-12 font-poppins pt-4">
            <div><h5 className="text-[11px] text-gray-600 uppercase font-black tracking-[0.2em] mb-8">Navigation</h5><ul className="text-[14px] text-gray-400 space-y-4 font-medium"><li>About</li><li>Features</li><li>Teams</li><li>Service</li></ul></div>
            <div><h5 className="text-[11px] text-gray-600 uppercase font-black tracking-[0.2em] mb-8">Support</h5><ul className="text-[14px] text-gray-400 space-y-4 font-medium"><li>Documentation</li><li>Consultation</li></ul></div>
            <div><h5 className="text-[11px] text-gray-600 uppercase font-black tracking-[0.2em] mb-8">Legal</h5><ul className="text-[14px] text-gray-400 space-y-4 font-medium"><li>Privacy</li><li>Term</li><li>Partner</li></ul></div>
            <div><h5 className="text-[11px] text-gray-600 uppercase font-black tracking-[0.2em] mb-8">Info</h5><ul className="text-[14px] text-gray-400 space-y-4 font-medium"><li>About us</li><li>Blog</li><li>Contacts</li></ul></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-12">
          <div className="text-[15px] text-gray-500 font-mono tracking-tight leading-relaxed">
            <p>+0000 0000 0000</p>
            <p>hello@yourwebsite.com</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 items-center">
             {['Instagram', 'Instagram', 'Instagram', 'Whatsapp'].map((social, idx) => (
               <a key={idx} href="#" className="flex items-center gap-3 text-[12px] uppercase font-black text-gray-400 hover:text-white transition-colors tracking-widest">
                 {social} <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center text-[9px] font-normal">↗</div>
               </a>
             ))}
          </div>
          <button className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors group">
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 opacity-40 font-poppins text-[13px] tracking-widest">
          <p className="font-black">MADE WITH 💙 BY TECH-E</p>
          <p className="font-medium">© E-Cell SASTRA. All Rights Reserved 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default ECellFinal;