import String from "../components/String";
import Process from "../components/work/Process";
import SelectedWorks from "../components/work/SelectedWorks";

const Work = () => {
  return (
    <section
      id="work"
      aria-label="Portfolio Work and Projects"
      className="relative min-h-0 sm:min-h-screen w-full bg-[hsl(0,0%,3%)] pt-8 pb-10 sm:pt-20 sm:pb-20 lg:pt-[5vw] lg:pb-[5vw] px-4 sm:px-6 lg:px-[2vw]"
    >
      <h2
        data-scroll-reveal
        className="text-zinc-100 uppercase font-[font2] text-2xl sm:text-3xl lg:text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.4)] lg:transform-[scaleY(1.6)]"
      >
        My Work
      </h2>
      <String />
      <SelectedWorks />
      <Process />
    </section>
  );
};

export default Work;
