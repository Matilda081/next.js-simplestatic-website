

const footerData = [
  {
    title: "Company",
    links: ["Legal Disclosure", "Terms of Service", "VDP Program", "Data Privacy"],
  },
  {
    title: "Resources",
    links: ["Changelogs", "Case Studies", "Glossary", "Account"],
  },
  {
    title: "Static WordPress",
    links: ["WordPress to Static", "Headless WordPress", "Performance Boost", "Security Benefits"],
  },
  {
    title: "Compare",
    links: ["WP2Static vs Simply Static", "HardyPress vs Simply Static", "Strattic vs Simply Static", "All Comparisons"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-20 px-6 md:px-16">
      
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {footerData.map((section, index) => (
          <div key={index}>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              {section.title}
            </h4>

            <ul className="space-y-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-800 underline hover:text-purple-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </footer>
  );
}