import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

export const contactMethods = [
  {
    icon: <IoMail aria-hidden="true" />,
    href: "mailto:mannasaptarshi1@gmail.com",
    text: "mannasaptarshi1@gmail.com",
    label: "Email address",
    title: "Email Me",
  },
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    href: "tel:+919332404436",
    text: "+91-93324 04436",
    label: "Phone number",
    title: "Call / WhatsApp",
  },
];

const ContactRight = () => {
  return (
    <div className="w-full space-y-3 lg:space-y-[1vw]">
      {contactMethods.map((item, index) => (
        <a
          key={index}
          href={item.href}
          aria-label={`${item.label}: ${item.text}`}
          className="group relative flex items-center justify-between w-full p-4 lg:p-[1.4vw] rounded-2xl bg-[hsl(0,0%,7%)] border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all duration-300"
        >
          <div className="flex items-center gap-3.5 lg:gap-[1.1vw]">
            <div className="w-10 h-10 lg:w-[3.2vw] lg:h-[3.2vw] rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-zinc-700/90 transition-colors">
              <span className="text-base lg:text-[1.3vw]">{item.icon}</span>
            </div>
            <div>
              <span className="block text-[10px] lg:text-[0.75vw] uppercase font-mono tracking-wider text-zinc-400 group-hover:text-zinc-300 transition-colors">
                {item.title}
              </span>
              <span className="text-sm sm:text-base lg:text-[1.15vw] font-medium text-zinc-200 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </div>
          </div>
          <FiArrowUpRight aria-hidden="true" className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-lg lg:text-[1.3vw] shrink-0 ml-2" />
        </a>
      ))}

      {/* Location Badge */}
      <div className="flex items-center gap-2.5 p-3.5 lg:p-[1.1vw] rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-zinc-400 text-xs sm:text-sm lg:text-[0.95vw] font-[font1]">
        <FaLocationDot className="text-zinc-500 shrink-0 text-sm lg:text-[1vw]" aria-hidden="true" />
        <span>Based in West Bengal, India &bull; Available worldwide</span>
      </div>
    </div>
  );
};

export default ContactRight;