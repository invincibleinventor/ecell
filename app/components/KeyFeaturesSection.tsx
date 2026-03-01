import { JSX } from "react";

export const KeyFeaturesSection = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Real-Time AI Insights",
      position: { top: "107px", left: "0" },
      textPosition: { top: "135px", left: "28px" },
      hasBorder: true,
      hasBackground: false,
    },
    {
      id: 2,
      title: "Adaptive AI Growth",
      position: { top: "194px", left: "443px" },
      textPosition: { top: "222px", left: "471px" },
      hasBorder: true,
      hasBackground: false,
    },
    {
      id: 3,
      title: "Effortless Automation",
      position: { top: "107px", left: "874px" },
      textPosition: { top: "446px", left: "902px" },
      hasBorder: false,
      hasBackground: true,
    },
    {
      id: 4,
      title: "Real-Time AI Insights",
      position: { top: "194px", left: "1318px" },
      textPosition: { top: "222px", left: "1346px" },
      hasBorder: true,
      hasBackground: false,
    },
    {
      id: 5,
      title: "Real-Time AI Insights",
      position: { top: "418px", left: "0" },
      textPosition: { top: "446px", left: "28px" },
      hasBorder: true,
      hasBackground: false,
    },
    {
      id: 6,
      title: "Real-Time AI Insights",
      position: { top: "509px", left: "442px" },
      textPosition: { top: "537px", left: "470px" },
      hasBorder: true,
      hasBackground: false,
    },
    {
      id: 7,
      title: "Effortless Automation",
      position: { top: "418px", left: "874px" },
      textPosition: { top: "446px", left: "902px" },
      hasBorder: true,
      hasBackground: false,
    },
    {
      id: 8,
      title: "Real-Time AI Insights",
      position: { top: "509px", left: "1318px" },
      textPosition: { top: "537px", left: "1346px" },
      hasBorder: true,
      hasBackground: false,
    },
  ];

  return (
    <section className="absolute top-[3513px] left-[calc(50.00%_-_1079px)] w-[1745px] h-[793px]">
      <h2 className="top-0 left-[calc(50.00%_-_462px)] w-[533px] [font-family:'Poppins-Regular',Helvetica] text-[#d9d9d9] text-[32px] leading-[normal] absolute font-normal tracking-[0]">
        Frequently asked Question
      </h2>

      {features.map((feature) => (
        <div key={feature.id}>
          <div
            className={`absolute w-[411px] h-[284px] rounded-[20px] ${
              feature.hasBackground
                ? "bg-[#c4c4c4]"
                : feature.hasBorder
                  ? "border border-solid border-[#d9d9d9]"
                  : ""
            }`}
            style={{ top: feature.position.top, left: feature.position.left }}
          />
          <div
            className={`w-[274px] [font-family:'Rethink_Sans-Regular',Helvetica] ${
              feature.id === 2 ? "text-white" : "text-[#d9d9d9]"
            } text-[32px] leading-[35.2px] absolute font-normal tracking-[0]`}
            style={{
              top: feature.textPosition.top,
              left: feature.textPosition.left,
            }}
          >
            {feature.title}
          </div>
        </div>
      ))}
    </section>
  );
};
