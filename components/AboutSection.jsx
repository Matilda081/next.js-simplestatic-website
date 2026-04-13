import { PiFireThin } from "react-icons/pi";
import { RiFingerprintFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { PiPlugsLight } from "react-icons/pi";

export default function AboutSectio() {
  const cards = [
    {
      title: "Performance",
      text: "Forget expensive hosting, complex caching setups, and countless performance plugins. Static WordPress delivers instant page loads from a global CDN.",
      icon: <PiFireThin size={35} strokeWidth={5}/>,
    },

    {
      title: "Security",
      text: "No database, no login page, no vulnerabilities. Static sites can’t be hacked the way traditional WordPress can. Rock-solid security by design.",
      icon: <RiFingerprintFill size={35}/>,
    },

    {
      title: "Zero Maintenance",
      text: "Stop updating plugins every day. Stop worrying about security patches. Focus ++-on your content while Simply Static handles the technical stuff.",
      icon: <BsEmojiSmile size={35}/>,
    },

    {
      title: "Full Compatibility",
      text: "Keep using your favorite WordPress plugins – forms, SEO, page builders, and multilingual. Simply Static works with the tools you already love.",
      icon: <PiPlugsLight size={35}/>,
    },

  ];

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
           What is Static WordPress? 
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl">
           WordPress powers your content. Static files power your site.<br/>
        The best of both worlds for the best results. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-gray-100 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-purple-600 flex items-center justify-center rounded-xl mb-6 text-white">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {card.title}
              </h3>

              <p className="text-grey-600 leading-relaxed">
                {card.text}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}