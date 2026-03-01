import { JSX } from "react";


export const FAQSection = (): JSX.Element => {
  return (
    <section className="top-[1487px] left-[1422px] absolute w-[628px] h-[489px]">
      <img
        className="absolute top-0 left-0 w-[90px] h-[489px]"
        alt="Decorative background element"
        src={"subtract6"}
      />

      <img
        className="absolute top-2.5 left-2.5 w-20 h-[306px]"
        alt="FAQ illustration"
        src={"image4"}
      />

      <h2 className="top-[345px] left-7 w-[263px] [font-family:'Poppins-Regular',Helvetica] text-[32px] leading-[41.6px] absolute font-normal text-white tracking-[0]">
        Lorem Ipusm
      </h2>

      <button
        className="all-[unset] box-border inline-flex items-center justify-center gap-5 px-5 py-[15px] absolute top-[375px] left-[388px] bg-[#8a71fe] rounded-[46px] cursor-pointer hover:bg-[#7a61ee] focus:outline-none focus:ring-2 focus:ring-[#8a71fe] focus:ring-offset-2 transition-colors"
        aria-label="See more FAQ content"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
          See more
        </span>

        <img
          className="relative w-3 h-3 mt-[-490.00px] mr-[-960.00px]"
          alt=""
          src={"vector1684"}
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
