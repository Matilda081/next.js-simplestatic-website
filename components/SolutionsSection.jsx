import { RiBracesFill } from "react-icons/ri";
import { RiArrowRightUpBoxLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";

export default function SolutionsSection() {
  const solutions = [
    {
      icon:  <RiBracesFill />,
      title: "Simply Static Pro",
      subtitle: "WordPress plugin for your own server",
      desc: "For developers and agencies who want maximum control and profit margins.",
      button: "Get Simply Static Pro",
      dark: false,
      what: [
        "WordPress Plugin",
        "Deploy to any platform (GitHub, AWS, Netlify, etc.)",
        "Static-friendly forms & search",
        "Multilingual and Multisite support",
        "Complete technical control"
      ],
      perfect: [
        "Developers managing multiple client sites",
        "Agencies with existing infrastructure",
        "Technical users who want flexibility",
        "Freelancers maximizing profit margins"
      ],
      pricing: [
        "$99/year per site",
        "$299/year unlimited sites"
      ]
    },
    {
      icon: <RiArrowRightUpBoxLine />,
      title: "Simply Static Studio",
      subtitle: "All-in-one managed WordPress hosting.",
      desc: "For businesses and content creators who want zero maintenance.",
      button: "Try Free for 7 Days-No Credit Card",
      dark: true,
      what: [
        "Managed WordPress hosting",
        "Static site hosting on global CDN",
        "Automated backups & SSL",
        "One-click WordPress login",
        "Everything from Simply Static Pro"
      ],
      perfect: [
        "Businesses running 1-5 websites",
        "Content creators who want simplicity",
        "Anyone who doesn't want to manage servers",
        "Teams who value convenience over control"
      ],
      pricing: [
        "From $11/month per site",
        "Agency plans available"
      ]
    }
  ];

  return (
    <section className="bg-[#f3f3f7] py-16 md:py-20 px-4 md:px-6 lg:px-20">
          {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:mb-14 mb-16 gap-6">
        <div>
          <h2 className="md:text-5xl text-3xl font-bold text-black">
            Choose your solution
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Two products. Two different needs. Which one fits you?
          </p>
        </div>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg md:w-auto">
          Compare Studio vs Pro
        </button>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">

        {solutions.map((card, i) => {

          const bg = card.dark
          ? "bg-[#0f0d1e] text-white"
          : "bg-[#e9e7f5] text-black";

          return (
            <div key={i} className={`flex flex-col h-full p-8 rounded-2xl ${bg}`}>
              <div className="bg-purple-600 w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-white text-xl">
                {card.icon}
                </div>

              <h3 className="text-xl font-bold mb-1">
                {card.title}
                </h3>
              <h4 className="text-sm mb-6">
                {card.subtitle}
                </h4>
              <p>{card.desc}</p>

              <button className="bg-purple-600 text-white px-5 py-3 rounded-mb mb-8 w-full md:w-auto">
                {card.button}
                </button>

            <div className="flex  flex-col gap-6 mt-auto">
          {/* WHAT YOU GET */}
            <div className={`p-6 rounded-xl ${card.dark ? "bg-[#1b1930]" : "bg-[#f7f7fb]"}`}>
              <h5 className="font-semibold mb-4">
                What you get:
                </h5>
              <ul className="space-y-3">
                {card.what.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span><FiCheck /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* PERFECT FOR */}
            <div className={`p-6 rounded-xl ${card.dark ? "bg-[#1b1930]" : "bg-[#f7f7fb]"}`}>
              <h5 className="font-semibold mb-4">
                Perfect for:
                </h5>
              <ul className="space-y-3">
                {card.perfect.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="text-green-500 mt-[2px]"><FiCheck /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* PRICING */}
            <div className={`p-6 rounded-xl ${card.dark ? "bg-[#1b1930]" : "bg-[#f7f7fb]"}`}>
              <h5 className="font-semibold mb-4">
                Pricing:
                </h5>
              <ul className="space-y-3">
                {card.pricing.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span><FiCheck /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            </div>

          </div>
          );
          })}

      </div>
    </section>
  );
}