export default function TestimonySection() {
  const testimonials = [
    {
     text: "I was having many issues with malware, but it ultimately led me to this static solution for WordPress sites, and I'm enjoying this new approach to developing WordPress projects quickly and securely.",
     name: "Andre Esteves Perrone",
     role: "Developer &amp; Instructor",
     img: "andre-esteves-perrones-150x150.webp"
    },
    {
      text: "I ended up converting one WordPress site to static, and it was super simple. I had one question about GitHub access, which was answered quickly.",
      name: "Dan Holloran",
      role: "Full-Stack Developer",
      img: "dan-holloran-150x150.webp"
    },
    {
      text: "This is a great addition, as it allows a site to be hosted in S3/Cloudfront and prevents WordPress attacks.",
      name: "Kevin Withnall",
      role: "CTO",
      img: "kevin-withnall-150x150 (1).webp"
    },
    {
      text: "Simply Static is a comprehensive solution for anyone looking to improve their WordPress site's performance, security, and cost-effectiveness. With the bonus of outstanding support from Patrick, it's a must-have for any WordPress user. Highly recommended!",
      name: "Maarten Emmerick",
      role: "Founder & CEO",
      img: "maarten-emmerick-150x150.webp"
    },
    {
      text: "Publishing a Jamstack site from WordPress gives the best of both worlds—flexible content creation with a serverless website (we publish to S3).",
      name:"Douglas Stein",
      role: "Director of Engineering",
      img: "Doug-headshot-Medium-150x150 (1).webp"
    },
    {
      text: "WordPress is very useful but too insecure, unreliable, and slow to be used by critical sites without a solution like this. This way, we get the benefits of WordPress without the downsides.",
      name: "Jocelyn Earl",
      role: "CTO",
      img: "joss__460x427-150x150 (1).webp"
    },

    {
     text: "As an agency, we work with many customers who come to us with either existing WordPress sites or new sites that are perfect candidates for static sites. Supporting static sites is a lighter lift on the agency side, and the customer wins on better security and typically better performance.",
     name: "Jim Hankins",
     role: "Founder & CEO",
     img: "him-hankis-cb-150x150.webp"
    },

    {
      text: "Static sites have many benefits. The pro version has a good feature for a solid implementation. I've encountered a few edge cases, and their support has been prompt and professional..",
      name: "Scott Green",
      role: "Founder & CEO",
      img: "scott-green.webp"
    },

    {
      text: "The plugin setup was easy and works great out of the box. The documentation is good, and support is great if needed, too!",
      name: "Herbert Hoekstra",
      role: "WordPress Developer",
      img: "Herbert-2023.avif"
    }
  ];

  return (
    <section className="bg-[#0d0d1a] py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hear from our happy Simply Static users</h2>

        <p className="text-gray-400 max-w-xl mx-auto">We helped thousands of people switch to Static WordPress. Read about their experience with us:</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {testimonials.map((item, i) => (
        <div key={i} className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm">

          <div className="text-[#5b21b6] mb-3 text-lg">
            ★★★★★
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-5">
            {item.text}
          </p>

          <div className="flex item-center gap-3">
            <img
            src={`/imageJ/${item.img}`} alt={item.name}
            className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                  </p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}