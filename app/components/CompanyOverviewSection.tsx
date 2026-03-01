import { JSX } from "react";

export const CompanyOverviewSection = (): JSX.Element => {
  const stats = [
    { value: "320 M", label: "Business" },
    { value: "590 K", label: "Happy Client" },
    { value: "$438 B", label: "Revenue" },
  ];

  return (
    <section className="absolute top-[2336px] left-[119px] w-[1309px] h-[811px]">
      <div className="inline-flex items-center gap-2.5 pl-[5px] pr-2.5 py-[5px] absolute top-0 left-0 bg-[#f9f9f9] rounded-[51px]">
        <div className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] relative flex-[0_0_auto] bg-white rounded-[51px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#8a71fe] text-base tracking-[0] leading-[normal]">
            About us
          </div>
        </div>
      </div>

      <h2 className="top-[78px] left-px w-[569px] [font-family:'Montserrat-Regular',Helvetica] text-[#1f2327] text-5xl leading-[normal] absolute font-normal tracking-[0]">
        Lorem Ipsum
      </h2>

      <button className="inline-flex items-center justify-center gap-2.5 pl-5 pr-0 py-0 absolute top-[131px] left-[1098px] bg-white rounded-[20px] border border-solid border-[#1f2327]">
        <span className="relative w-fit text-[#1f2327] text-base [font-family:'Poppins-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
          Download Now
        </span>

        <div className="relative w-[53px] h-[53px] bg-[#1f2327] rounded-[20px]">
          <img
            className="absolute top-5 left-5 w-[13px] h-[13px]"
            alt=""
            src={
                ""
            }
          />
        </div>
      </button>

      <div className="absolute top-[263px] left-px w-[450px] h-[548px] bg-[#c4c4c4] rounded-[20px]" />

      <div className="absolute top-[330px] left-[969px] w-[35px] h-[35px] bg-[#1f2327] rounded-[10px]" />

      <h3 className="top-[330px] left-[519px] w-[323px] [font-family:'Montserrat-Regular',Helvetica] text-[#1f2327] text-[32px] leading-[normal] absolute font-normal tracking-[0]">
        E CELL SASTRA APP
      </h3>

      <p className="absolute top-[385px] left-[969px] w-[303px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[normal]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p className="absolute top-[431px] left-[519px] w-[399px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[normal]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-5 absolute top-[503px] left-[969px]"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8a71fe] text-xl tracking-[0] leading-[normal]">
          Listen Now
        </span>

        <img
          className="relative w-[15px] h-[15px] mr-[-0.50px]"
          alt=""
          src={""}
        />
      </a>

      <div className="flex w-[734px] items-center justify-between absolute top-[714px] left-[519px]">
        {stats.map((stat, index) => (
          <>
            {index > 0 && (
              <img
                className="relative w-px h-[29px]"
                alt=""
                src={index === 1 ? "vector210" : 
                    ""
                }
                key={`divider-${index}`}
              />
            )}
            <div
              className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]"
              key={index}
            >
              <p className="w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-transparent text-[40px] relative tracking-[0] leading-[normal]">
                <span className="text-[#1f2327]">{stat.value}</span>
                <span className="text-[#8a71fe]">+</span>
              </p>

              <div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-[#5a5a5a] text-base tracking-[0] leading-[normal]">
                {stat.label}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
