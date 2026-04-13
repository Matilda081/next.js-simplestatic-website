import { HiMiniCodeBracket } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import { PiArrowSquareOut } from "react-icons/pi";

export default function TrustedSection() {
  const cards = [
    {
      icon: <HiMiniCodeBracket />,
      title: "Developers",
      text: "Fully automate Static WordPress and run an ultra-secure and fast blog or website from your local computer. You can even use WP-CLI to automate it.",
    },

    {
      icon: <MdGroups />,
      title: "Agencies",
      text: "Deliver outstanding websites to your clients while ensuring that they are performant, secure, and don't need permanent maintenance",
    },

    {
      icon: <PiArrowSquareOut />,
      title: "Content Creators",
      text: "Publish your next article or newsletter issue from anywhere in the world, knowing it will be delivered to your visitors in milliseconds.",
    },
  ];

  const stats = [
    {num: "40k", label: "Happy Users"},
    {num: "1500k", label: "Downloads"},
    {num: "4.5/5", label: "User Rating"},
    {num: "25+", label: "Integrations"},
  ];

  const logos = [
  "microsoft.webp",
  "unicef-logo.webp",
  "rapid-logo-300x85.webp",
  "hp-logo-150x150.webp",
  "dash-logo-300x79.webp",
  "postman-logo.webp",
  "near-logo.webp",
  "mailtrap-logo-300x79.webp"
 ];

return (
  <section className="bg-white py-20 px-4 md:px-12 lg:px-24">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">


    <div className="max-w-2xl">
    <h2 className="text-3xl md:text-5xl font-bold text-[#0d0d0d] mb-4">
    Trusted by developers, agencies, and businesses
    </h2>
      <p className="text-[#6b7280] text-lg">
       Trusted by over 40,000 developers, agencies, and businesses worldwide - from small businesses to big enterprises. 
      </p>
      </div>

      <button className="bg-[#5b21b6] text-white px-6 py-3 rounded-lg whitespace-nowrap ">
        Compare Studio vs Pro →
      </button>
    </div>
  

    <div className="grid md:grid-cols-3 gap-8 mb-14 bg-[#ede9fe] p-8 rounded-2xl">
      {cards.map((item, i) => (
        <div key={i}>
        <div className="bg-[#5b21b6] w-11 h-11 flex items-center justify-center rounded-lg mb-4 text-white text-lg">
          {item.icon}
        </div>
        <h3 className="font-bold text-[#0d0d0d] mb-2">
          {item.title}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed">
          {item.text}
        </p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
      {stats.map((s, i) => (
        <div key={i} className="bg-[#ede9fe] p-6 rounded-xl">
          <h3 className="text-3xl font-bold text-[#0d0d0d] mb-1">
            {s.num}
          </h3>
          <p className="text-[#6b7280] text-sm">
            {s.label}
          </p>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
      {logos.map((logo, i) => (
        <img key={i}
        src={`/imageJ/${logo}`} alt="trusted brand logo"
        className="h-6 md:h-7 object-contain"
        />
      ))}
    </div>
  </section>
)

}