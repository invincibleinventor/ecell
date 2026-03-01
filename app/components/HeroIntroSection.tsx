import { useState } from "react";
import { JSX } from "react";

export const HeroIntroSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: "320M", label: "Business" },
    { value: "590K", label: "Happy Client" },
  ];

  const heroWords = [
    { text: "EMPOWER", top: "190px", left: "616px" },
    { text: "IDEATE", top: "302px", left: "991px" },
    { text: "INCUBATE", top: "405px", left: "620px" },
    { text: "INNOVATE", top: "510px", left: "879px" },
  ];

  const avatarGroups = {
    discover: [
      { id: 1, bgColor: "#c4c4c4" },
      { id: 2, bgColor: "#c4c4c4" },
      { id: 3, bgColor: "#c4c4c4" },
    ],
    bottom: [
      { id: 1, bgColor: "#c4c4c4" },
      { id: 2, bgColor: "#c4c4c4" },
      { id: 3, bgColor: "#c4c4c4" },
    ],
  };

  return (
    <section className="absolute top-[42px] left-0 w-[1416px] h-[939px]">
      <img
        className="absolute top-[124px] left-[83px] w-[732px] h-[549px] aspect-[1.33] object-cover"
        alt="Hero background illustration"
        src={"image1"}
      />

      <div
        className="absolute top-[81px] left-0 w-[1240px] h-[858px] aspect-[1.45] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)]"
        aria-hidden="true"
      />

      <header className="absolute top-0 left-[106px] w-[1300px] h-12 flex gap-[646px] bg-transparent">
        <nav
          className="inline-flex w-[347px] h-12 relative items-center gap-2.5"
          aria-label="Main navigation"
        >
          <button
            className="inline-flex items-center justify-center gap-2.5 px-[26px] py-[9px] relative flex-[0_0_auto] rounded-3xl border border-solid border-[#f9f9f9] bg-transparent hover:bg-[#f9f9f9] transition-colors"
            aria-label="Events menu"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#1f2327] text-xl tracking-[0] leading-[normal]">
              Events
            </span>

            <span
              className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#1f2327] text-xl tracking-[0] leading-[normal]"
              aria-hidden="true"
            >
              +
            </span>
          </button>

          <div
            className="relative w-[7px] h-[7px] bg-[#f9f9f9] rounded-[3.5px]"
            aria-hidden="true"
          />

          <button
            className="flex w-[179px] items-center justify-center gap-2.5 px-[26px] py-[9px] relative rounded-3xl border border-solid border-[#f9f9f9] bg-transparent hover:bg-[#f9f9f9] transition-colors"
            aria-label="Teams menu"
          >
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#1f2327] text-xl tracking-[0] leading-[normal]">
                Teams
              </span>

              <div className="relative w-[15px] h-[13px]" aria-hidden="true">
                <img
                  className="absolute w-[26.41%] h-[70.51%] top-[29.49%] left-[73.59%]"
                  alt=""
                  src={"vector2"}
                />

                <img
                  className="absolute w-[103.33%] h-[103.85%] top-[-3.85%] left-[-3.33%]"
                  alt=""
                  src={"vector3"}
                />
              </div>
            </div>
          </button>
        </nav>

        <div className="inline-flex w-[307px] h-10 relative items-center gap-[34px]">
          <button
            className="relative w-[115px] h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="absolute top-0 left-0 w-[113px] h-10 rounded-3xl border border-solid border-white" />

            <span className="absolute top-[5px] left-[17px] text-[#1f2327] text-xl [font-family:'Poppins-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              Menu
            </span>

            <div className="absolute top-0 left-[73px] w-10 h-10 flex bg-white rounded-[20px]">
              <img className="flex-1 w-3.5" alt="" src={"vector4"} />
            </div>
          </button>

          <img
            className="relative w-px h-9 object-cover"
            alt=""
            src={"line1"}
            aria-hidden="true"
          />

          <a
            href="#about"
            className="flex w-[126px] h-10 items-center justify-center gap-2.5 px-[21px] py-[7px] relative bg-white rounded-3xl hover:bg-gray-100 transition-colors"
          >
            <span className="relative w-fit mt-[-3.00px] mb-[-1.00px] ml-[-2.50px] mr-[-2.50px] text-[#1f2327] text-xl [font-family:'Poppins-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
              About us
            </span>
          </a>
        </div>
      </header>

      {heroWords.map((word, index) => (
        <h1
          key={index}
          className="absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#1e2227] text-8xl tracking-[0] leading-[normal]"
          style={{ top: word.top, left: word.left }}
        >
          {word.text}
        </h1>
      ))}

      <div className="absolute top-[642px] left-[616px] w-[308px] h-[61px]">
        <div className="absolute top-0 left-[82px] w-56 h-[61px] bg-[#121416] rounded-[0px_20px_20px_0px]" />

        <div className="absolute top-0 left-0 w-[154px] h-[61px] bg-white rounded-[20px] border border-solid border-[#121416]" />

        <div
          className="inline-flex items-center absolute top-3 left-[168px]"
          aria-label="User avatars"
        >
          {avatarGroups.discover.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`relative w-[37px] h-[37px] ${index > 0 ? "-ml-2.5" : ""} bg-[#c4c4c4] rounded-[18.5px] border-[3px] border-solid border-[#121416]`}
              aria-hidden="true"
            />
          ))}
        </div>

        <a
          href="#discover"
          className="absolute top-[17px] left-[18px] text-[#121416] text-base [font-family:'Poppins-Regular',Helvetica] font-normal tracking-[0] leading-[normal] hover:underline"
        >
          Discover more
        </a>

        <img
          className="absolute top-6 left-[273px] w-[15px] h-[15px]"
          alt=""
          src={'rectangle5'}
          aria-hidden="true"
        />
      </div>

      <p className="absolute top-[799px] left-[328px] w-[212px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[normal]">
        Transform tasks into triumphs with an assistant that understands you.
      </p>

      <div
        className="inline-flex items-center absolute top-[799px] left-[120px]"
        aria-label="Team members"
      >
        {avatarGroups.bottom.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`relative w-[76px] h-[76px] ${index > 0 ? "-ml-5" : ""} bg-[#c4c4c4] rounded-[20px] border-2 border-solid border-white`}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="inline-flex items-center gap-[30px] absolute top-[323px] left-[629px]">
        {stats.map((stat, index) => (
          <div key={index} className="inline-flex items-center gap-[30px]">
            {index > 0 && (
              <img
                className="relative w-px h-[29px]"
                alt=""
                src={"vector2102"}
                aria-hidden="true"
              />
            )}
            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <p
                className={`${index === 0 ? "w-fit" : "self-stretch"} relative mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-transparent text-4xl tracking-[0] leading-[normal]`}
              >
                <span className="text-[#1f2327]">{stat.value}</span>
                <span className="text-[#8a71fe]">+</span>
              </p>

              <div className="self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-[#3c3a39] text-base relative tracking-[0] leading-[normal]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-[781px] left-[1307px] w-[85px] h-[85px] flex rounded-[42.5px] border border-solid border-[#1e2227] bg-transparent hover:bg-[#1e2227] transition-colors group"
        aria-label="Scroll down"
      >
        <img
          className="mt-[32.5px] w-[21px] h-5 ml-[31.5px] group-hover:invert transition-all"
          alt=""
          src={
            ""
          }
        />
      </button>
    </section>
  );
};
