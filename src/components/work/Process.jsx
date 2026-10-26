const Process = () => {
  const processCards = [
    {
      number: "01",
      title: "Plan",
      description: "Understanding the problem, requirements, and user needs.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Wireframing, architecture, database schema, and API planning.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Building responsive UIs, APIs, authentication, and backend logic.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Testing, optimization, deployment, and continuous improvements.",
    },
  ];

  return (
    <div className="w-full pt-8 sm:pt-12 lg:pt-0 px-0 lg:px-[1vw]">
      <h3
        data-scroll-reveal
        className="text-zinc-100 text-2xl sm:text-3xl lg:text-[3.5vw] font-[font2] font-bold tracking-wide"
      >
        Process
      </h3>
      <div className="w-full h-px bg-zinc-800 my-4 lg:mb-[2vw]"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 items-stretch">
        {processCards.map((card) => {
          return (
            <div
              key={card.title}
              data-scroll-reveal
              aria-label={`Step ${card.number}: ${card.title}`}
              className="group
                relative
                flex
                flex-col
                h-full
                w-full
                p-4 sm:p-5 lg:p-6
                rounded-2xl sm:rounded-3xl
                bg-[hsl(0,0%,7%)]
                border
                border-zinc-800/80
                hover:border-zinc-700
                active:scale-[0.98]
                transition-all
                duration-300
                "
            >
              {/* Number */}
              <div
                className="text-2xl sm:text-4xl lg:text-[4vw] font-[font2] leading-none font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors duration-300"
                aria-hidden="true"
              >
                {card.number}
              </div>
              {/* Title */}
              <h4 className="text-base sm:text-xl lg:text-2xl font-bold mt-2 sm:mt-3 font-[font2] text-zinc-100 tracking-tight">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm lg:text-[0.95vw] text-zinc-400 mt-1.5 sm:mt-2 font-[font1] leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
