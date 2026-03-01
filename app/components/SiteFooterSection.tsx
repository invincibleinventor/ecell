import { JSX, useState } from "react";


export const SiteFooterSection = (): JSX.Element => {
  const [question, setQuestion] = useState("");

  const contactInfo = [
    { text: "+0000 0000 0000" },
    { text: "hello@yourwebsite.com" },
  ];

  const navigationLinks = [
    { label: "About" },
    { label: "Features" },
    { label: "Teams" },
    { label: "Service" },
  ];

  const supportLinks = [{ label: "Documentation" }, { label: "Consultation" }];

  const legalLinks = [
    { label: "Privacy" },
    { label: "Term" },
    { label: "Partner" },
  ];

  const infoLinks = [
    { label: "About us" },
    { label: "Blog" },
    { label: "Contacts" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "instagram" },
    { name: "Instagram", icon: "instagram2" },
    { name: "Instagram", icon: "instagram3" },
    { name: "Instagram", icon: "instagram4" },
    { name: "Whatsapp", icon: "whatsapp" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Question submitted:", question);
  };

  return (
    <footer className="absolute top-[5488px] left-[120px] w-[1276px] h-[780px] bg-transparent">
      <div className="flex w-[1268px] items-center justify-between absolute top-[393px] left-1">
        <address className="inline-flex flex-col items-start justify-center gap-[30px] relative flex-[0_0_auto] not-italic">
          <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className={`relative w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Poppins-Medium',Helvetica] font-medium text-[#f9f9f9] text-sm ${index === 1 ? "text-right" : ""} tracking-[0] leading-[19.6px] whitespace-nowrap`}
              >
                {contact.text}
              </div>
            ))}
          </div>
        </address>

        <nav
          className="flex w-[848px] items-start gap-12 relative"
          aria-label="Footer navigation"
        >
          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#f9f9f9] text-[10px] tracking-[0.40px] leading-[14.0px]">
              NAVIGATION
            </h3>

            <ul className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] list-none p-0 m-0">
              {navigationLinks.map((link, index) => (
                <li key={index} className="relative self-stretch w-full">
                  <a
                    href={`#${link.label.toLowerCase()}`}
                    className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f9f9f9] text-sm tracking-[0] leading-[19.6px] no-underline hover:underline`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#f9f9f9] text-[10px] tracking-[0.40px] leading-[14.0px]">
              SUPPORT
            </h3>

            <ul className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] list-none p-0 m-0">
              {supportLinks.map((link, index) => (
                <li key={index} className="relative self-stretch w-full">
                  <a
                    href={`#${link.label.toLowerCase()}`}
                    className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f9f9f9] text-sm tracking-[0] leading-[19.6px] no-underline hover:underline`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#f9f9f9] text-[10px] tracking-[0.40px] leading-[14.0px]">
              LEGAL
            </h3>

            <ul className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] list-none p-0 m-0">
              {legalLinks.map((link, index) => (
                <li key={index} className="relative self-stretch w-full">
                  <a
                    href={`#${link.label.toLowerCase()}`}
                    className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f9f9f9] text-sm tracking-[0] leading-[19.6px] no-underline hover:underline`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6 relative flex-1 grow">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0.40px] leading-[14.0px]">
              INFO
            </h3>

            <ul className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] list-none p-0 m-0">
              {infoLinks.map((link, index) => (
                <li key={index} className="relative self-stretch w-full">
                  <a
                    href={`#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f9f9f9] text-sm tracking-[0] leading-[19.6px] no-underline hover:underline`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <a
          href="#top"
          className="relative w-[60px] h-[60px] rounded-[30px] border border-solid border-[#f9f9f9] flex items-center justify-center no-underline hover:bg-[#f9f9f9] hover:bg-opacity-10 transition-colors"
          aria-label="Back to top"
        >
          <img
            className="absolute w-[57.92%] h-[64.58%] top-[35.42%] left-[42.08%]"
            alt=""
            src={"vector"}
          />
        </a>
      </div>

      <div className="flex flex-col w-[1272px] items-center gap-12 absolute top-[624px] left-0">
        <div className="flex w-[1224px] items-start gap-12 relative flex-[0_0_auto]">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[30px] relative flex-1 grow"
            >
              <div
                className={`${social.name === "Whatsapp" ? "bg-[#7b0052]" : "bg-[#1f2327]"} relative self-stretch w-full h-px opacity-20`}
              />

              <a
                href={`#${social.name.toLowerCase()}`}
                className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] no-underline hover:opacity-80 transition-opacity"
                aria-label={social.name}
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#d9d9d9] text-xs tracking-[0] leading-[16.8px] whitespace-nowrap">
                  {social.name}
                </div>

                <img className="relative w-4 h-4" alt="" src={social.icon} />
              </a>
            </div>
          ))}
        </div>

        <div className="relative self-stretch w-full h-[60px]" />
      </div>

      <h2 className="absolute top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#f9f9f9] text-[40px] tracking-[-0.80px] leading-[48.0px]">
        Do you have
        <br />
        any questions?
      </h2>

      <p className="absolute top-[140px] left-1 w-[680px] opacity-80 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f9f9f9] text-base tracking-[0] leading-[22.4px]">
        Feel free to send us your questions.
      </p>

      <form onSubmit={handleSubmit} className="absolute top-[206px] left-1">
        <label htmlFor="question-input" className="sr-only">
          Write your questions
        </label>
        <input
          id="question-input"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Write your questions"
          className="flex w-[251px] h-[46px] items-center gap-2.5 px-5 py-[5px] rounded-lg border-[0.5px] border-solid border-[#f9f9f9] bg-transparent [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f9f9f9] text-sm tracking-[0] leading-[normal] placeholder:text-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#c200ae]"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 px-5 py-[15px] absolute top-0 left-[289px] bg-[#c200ae] rounded-[5px] hover:bg-[#a0008e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c200ae] focus:ring-offset-2"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
            Send
          </span>
        </button>
      </form>
    </footer>
  );
};
