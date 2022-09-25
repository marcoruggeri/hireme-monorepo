import { footerLogos } from "../../lib/constants";

const Footer = () => {
  return (
    <div className="w-full bg-[#1D2939] py-8 2xl:py-12 px-28 2xl:px-52 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {footerLogos.map((l, i) => (
          <img key={i} src={l} />
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <img src="/brand/Logomark.png" />
        <div className="text-lg text-white font-extrabold tracking-tight logo">
          Hire Me
        </div>
      </div>
      <div className="text-gray-400">© 2022 Hireme. All rights reserved.</div>
    </div>
  );
};

export default Footer;
