import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub aria-hidden="true" />,
    href: "https://github.com/SaptarshiCodes",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn aria-hidden="true" />,
    href: "https://www.linkedin.com/in/saptarshi-manna-ju28",
  },
  {
    name: "Facebook",
    icon: <FaFacebook aria-hidden="true" />,
    href: "https://www.facebook.com/share/16AvGBjRMb/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram aria-hidden="true" />,
    href: "https://instagram.com/saptarshi_010",
  },
];

export default function SocialLinks() {
  return (
    <div data-scroll-reveal className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Saptarshi on ${item.name}`}
          className="group flex h-11 w-11 sm:h-12 sm:w-12 lg:h-[3.2vw] lg:w-[3.2vw] items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 hover:text-black active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
        >
          <span className="scale-110 sm:scale-120 lg:scale-135">
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
