import { JSX } from "react";


interface CardData {
  id: number;
  image: string;
  subtract: string;
  title: string;
  vectorIcon: string;
  leftPosition: string;
  imageWidth: string;
  subtractWidth: string;
  vectorStyles?: string;
}

export const ServiceHighlightsSection = (): JSX.Element => {
  const cardsData: CardData[] = [
    {
      id: 1,
      image: "image5",
      subtract: "subtract7",
      title: "Lorem Ipsum",
      vectorIcon: "vector1685",
      leftPosition: "0",
      imageWidth: "w-[73px]",
      subtractWidth: "w-[83px]",
      vectorStyles: "w-3 h-3 mt-[-500.00px] mr-[-2925.00px]",
    },
    {
      id: 2,
      image: "image2",
      subtract: "subtract2",
      title: "Lorem Ipsum",
      vectorIcon: "vector1682",
      leftPosition: "663px",
      imageWidth: "w-[606px]",
      subtractWidth: "w-[626px]",
      vectorStyles: "w-[13px] h-[13px] mr-[-0.50px]",
    },
    {
      id: 3,
      image: "image3",
      subtract: "subtract3",
      title: "Lorem Ipusm",
      vectorIcon: "vector1683",
      leftPosition: "1309px",
      imageWidth: "w-[606px]",
      subtractWidth: "w-[626px]",
      vectorStyles: "w-[13px] h-[13px] mr-[-0.50px]",
    },
  ];

  return (
    <section className="absolute top-[1064px] left-[calc(50.00%_-_1299px)] w-[2145px] h-[1100px]">
      <img
        className="absolute top-0 left-[543px] w-[1512px] h-[1100px]"
        alt=""
        src={"subtract"}
      />

      <h2 className="top-[255px] left-[calc(50.00%_-_64px)] w-[582px] [font-family:'Montserrat-Regular',Helvetica] text-5xl text-center leading-[normal] absolute font-normal text-white tracking-[0]">
        Tagline - Lorem Ipsum
      </h2>

      <nav
        className="inline-flex items-center justify-center gap-2.5 pl-[5px] pr-2.5 py-[5px] absolute top-[194px] left-[calc(50.00%_+_100px)] bg-[#1f2327] rounded-[51px]"
        role="tablist"
        aria-label="Content sections"
      >
        <button
          className="inline-flex items-center justify-center gap-2.5 px-5 py-[5px] relative flex-[0_0_auto] bg-white rounded-[51px]"
          role="tab"
          aria-selected="true"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#8a71fe] text-base tracking-[0] leading-[normal]">
            Achievements
          </span>
        </button>

        <button
          className="[font-family:'Poppins-Regular',Helvetica] font-normal text-white text-base relative w-fit tracking-[0] leading-[normal]"
          role="tab"
          aria-selected="false"
        >
          Speakers
        </button>
      </nav>

      {cardsData.map((card) => (
        <article
          key={card.id}
          className={`${card.id === 1 ? "top-[433px]" : "top-[435px]"} left-[${card.leftPosition}] absolute w-[628px] h-[489px]`}
          style={{ left: card.leftPosition }}
        >
          <img
            className={`absolute top-0 ${card.id === 1 ? "left-[543px]" : "left-0"} ${card.subtractWidth} h-[489px]`}
            alt=""
            src={card.subtract}
          />

          <img
            className={`absolute top-2.5 ${card.id === 1 ? "left-[543px]" : "left-2.5"} ${card.imageWidth} h-[306px]`}
            alt={card.title}
            src={card.image}
          />

          <h3
            className={`absolute top-[345px] left-7 ${card.id === 3 ? "w-[263px]" : "w-[219px]"} [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[41.6px]`}
          >
            {card.title}
          </h3>

          <button
            className="all-[unset] box-border inline-flex items-center justify-center gap-5 px-5 py-[15px] absolute top-[375px] left-[388px] bg-[#8a71fe] rounded-[46px]"
            aria-label={`See more about ${card.title}`}
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
              See more
            </span>

            <img
              className={`relative ${card.vectorStyles}`}
              alt=""
              src={card.vectorIcon}
            />
          </button>
        </article>
      ))}
    </section>
  );
};
