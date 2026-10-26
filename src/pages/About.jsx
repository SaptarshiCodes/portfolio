import MainGrid from "../components/about/AboutCard";
import String from "../components/String";

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Saptarshi Manna"
      className="relative min-h-0 sm:min-h-screen w-full bg-[hsl(0,0%,3%)] pt-8 pb-10 sm:pt-20 sm:pb-20 lg:pt-[5vw] lg:pb-[5vw] px-4 sm:px-6 lg:px-[2vw]"
    >
      <h2
        data-scroll-reveal
        className="text-zinc-100 uppercase font-[font2] text-2xl sm:text-3xl lg:text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.4)] lg:transform-[scaleY(1.6)]"
      >
        About
      </h2>
      <String />
      <MainGrid />
    </section>
  );
};

export default About;
