const logos = [
  {src: "microsoft.webp" },
  {src:"unicef-logo.webp" },
  {src:"rapid-logo-300x85.webp" },
  {src:"hp-logo-150x150.webp", small: true },
  {src:"dash-logo-300x79.webp" },
  {src:"postman-logo.webp" },
  {src:"near-logo.webp" },
  {src:"mailtrap-logo-300x79.webp" },
  ];
export default function TrustedSection() {
  return (
    <section className="bg-[#f5f6fa]  text-center py-20 px-6">
      <p className="text-lg md:text-2xl font-semibold text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">With over <span className="text-blue-600"> 40,000 active users</span> and over <span className="text-blue-600">1,400,000 downloads</span>,<br/>
      Simply Static is the <span className="text-blue-600">most popular</span> static site generator for<br/>
      WordPress. It’s also trusted by industry-leading businesses.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo,i) => (
          <img
          key={i}
          src={`/imageJ/${logo.src}`}
          className={`
            object-contain opacity-80 hover:opacity-100 transition 
            ${logo.small
              ? "w-[40px] md:w-[40px]" : "w-[90px] md:w-[110px]"
            }
            `}
          />
        ))}
      </div>
    </section>
  );
}