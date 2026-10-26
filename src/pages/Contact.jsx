import ContactRight from "../components/contact/ContactRight";
import SocialLinks from "../components/contact/SocialLinks";
import String from "../components/String";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Information and Footer"
      className="relative min-h-0 sm:min-h-screen w-full bg-[hsl(0,0%,3%)] pt-8 pb-6 sm:pt-20 sm:pb-12 lg:pt-[5vw] lg:pb-[2vw] lg:mt-[6vw] px-4 sm:px-6 lg:px-[2vw] flex flex-col justify-between"
    >
      <div>
        <h2
          data-scroll-reveal
          className="text-zinc-100 uppercase font-[font2] text-2xl sm:text-3xl lg:text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.4)] lg:transform-[scaleY(1.6)]"
        >
          Contact Me
        </h2>
        <String />

        {/* Content Grid: 1 column on mobile, 2 balanced columns on desktop */}
        <div className="flex flex-col lg:flex-row justify-between py-6 sm:py-10 lg:py-[4vw] px-0 lg:px-[1vw] gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Availability, Grand Heading, Narrative, and Socials on desktop */}
          <div className="w-full lg:w-[50%] space-y-4 lg:space-y-[1.4vw]">
            {/* Availability Status Badge */}
            <div data-scroll-reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 lg:px-[1vw] lg:py-[0.45vw] rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm lg:text-[0.85vw] font-mono">
                <span className="w-1.5 h-1.5 lg:w-[0.4vw] lg:h-[0.4vw] rounded-full bg-emerald-400 animate-pulse" />
                Available for new opportunities
              </div>
            </div>

            {/* Grand Heading */}
            <div
              data-scroll-reveal
              className="font-[font2] font-bold text-3xl sm:text-5xl lg:text-[5vw] tracking-tight leading-[1.05]"
            >
              <span className="text-zinc-100 block">Let's Work</span>
              <span className="text-zinc-400 block">Together.</span>
            </div>

            {/* Narrative Description */}
            <p
              data-scroll-reveal
              className="text-zinc-300 text-sm sm:text-base lg:text-[1.25vw] leading-relaxed font-[font1] max-w-lg"
            >
              Crafting digital experiences that leave a lasting impression. Available for freelance projects, technical collaborations, and full-time engineering roles.
            </p>

            {/* Social Links on Desktop */}
            <div data-scroll-reveal className="hidden lg:block pt-[2vw]">
              <p className="text-xs lg:text-[0.75vw] uppercase font-mono tracking-widest text-zinc-400 mb-3">
                Connect on social
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Contact Cards & Socials on Mobile */}
          <div className="w-full lg:w-[46%] space-y-6 lg:space-y-0">
            <div data-scroll-reveal>
              <ContactRight />
            </div>

            {/* Social Links on Mobile */}
            <div data-scroll-reveal className="block lg:hidden pt-2">
              <p className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-3">
                Connect on social
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-px w-full bg-zinc-800 my-4 lg:my-[1vw]"></div>

        <footer className="text-zinc-300 font-normal text-xs sm:text-sm lg:text-[1vw] py-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
          <p>© {new Date().getFullYear()} Saptarshi Manna. All rights reserved.</p>
          <p>Designed &amp; Built with passion.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
