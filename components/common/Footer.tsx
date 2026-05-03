import logo from "@/public/images/logo.png";
import Image from "next/image";
import x from "@/public/images/footer/twitter-logo-2.svg";
import fb from "@/public/images/footer/facebook.png";
import telegram from "@/public/images/footer/tele.png";
import playstore from "@/public/images/footer/google-play.png";
import appstore from "@/public/images/footer/appstore.png";
import logo1 from "@/public/images/footer/logo 1.png";
import logoOrange from "@/public/images/footer/logo-orange.png";
import wing from "@/public/images/footer/wing.png";
import yt from "@/public/images/footer/yt.png";
import ig from "@/public/images/footer/insta.png";

const Footer = () => {
  const games = [
    "Daily Quizzical",
    "Higher or Lower",
    "General Knowledge",
    "Predictor",
    "Eliminator",
    "Promotions",
  ];

  const helpCentre = [
    "Live Support",
    "How to Play/Rules",
    "FAQs",
    "Deposits",
    "Withdrawals",
    "Shop",
  ];

  const resources = [
    "Chat",
    "Terms & Conditions",
    "Privacy Policy",
    "Live Score",
    "Content",
  ];

  const languages = ["English", "Spanish", "Portuguese", "French", "Arabic"];

  const socialIcons = [
    { id: 1, label: x },
    { id: 2, label: telegram },
    { id: 3, label: yt },
    { id: 4, label: ig },
    { id: 5, label: fb },
  ];

  return (
    <footer className="bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-5">
            <div className="w-42">
              <Image src={logo} alt="" />
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-3">Follow us on</p>
              <div className="flex items-center gap-2">
                {socialIcons.map(({ label, id }) => (
                  <button
                    key={id}
                    aria-label={label}
                    className="w-8 h-8 rounded-full  border  border-[#2a2a4a] hover:border-purple-500 transition-colors flex items-center justify-center"
                  >
                    <Image src={label} alt="" className="rounded-full" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-wrap gap-8 lg:justify-end">
            {/* Games */}
            <div className="flex flex-col gap-2 min-w-32.5">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                Games
              </h3>
              {games.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Help Centre */}
            <div className="flex flex-col gap-2 min-w-32.5">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                Help Centre
              </h3>
              {helpCentre.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-w-32.5">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                Resources
              </h3>
              {resources.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-w-30">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                Change Language
              </h3>
              {languages.map((lang) => (
                <a
                  key={lang}
                  href="#"
                  className="text-gray-400 text-xs hover:text-white transition-colors"
                >
                  {lang}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a3a]">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="w-48">
              <Image src={logo1} alt="" />
            </div>

            <div className="w-48 text-white">
              <Image src={logoOrange} alt="" className="text-white" />
            </div>

            <div className="w-30">
              <Image src={wing} alt="" />
            </div>

            <div className="flex items-center gap-1 px-1">
              <span className="text-white text-[10px] leading-tight">
                18+
                <br />
                Only
              </span>
            </div>

            <div className="flex items-center gap-1 px-1">
              <span className="text-white text-[10px] leading-tight">
                Real
                <br />
                Money
              </span>
            </div>

            <div className="flex items-center gap-1 px-1">
              <span className="text-white text-[10px] leading-tight">
                Under
                <br />
                18
              </span>
            </div>

            <div className="flex items-center gap-1 px-1">
              <span className="text-white text-[10px] leading-tight">
                For Fun
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Google Play */}
            <div>
              <Image src={appstore} alt="" />
            </div>
            {/* App Store */}
            <div>
              <Image src={playstore} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a3a]">
        <div className="max-w-7xl mx-auto px-8 py-4 text-center">
          <p className="text-gray-500 text-[11px] leading-relaxed">
            Sports Duel is operated by Kitsilano Sports Entertainment Limited
            who are licensed and regulated in Great Britain by the Gambling
            Commission under account number 66225.
            <br />
            The licence information can be viewed through this link:
          </p>
          <a
            href="https://www.gamblingcommission.gov.uk/public-register/business/detail/66225"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-[11px] hover:text-blue-300 transition-colors"
          >
            https://www.gamblingcommission.gov.uk/public-register/business/detail/66225
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
