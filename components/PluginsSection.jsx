const plugins = [
  "wpforms-logo-300x86.webp",
  "gravity-forms-logo-300x39.webp",
  "fluent-forms-logo-300x66.webp",
  "ws-form-logo-300x86.webp",
  "elementor-logo-300x60.webp",
  "bricks-logo.webp",
  "brizy-logo-300x113.webp",
  "yoast-logo-300x133.webp",
  "rankmath-logo-300x49.webp",
  "aioseo-logo-300x59.webp",
  "seopress-logo-300x52.webp",
  "wpml-logo-300x98.webp",
  "jetpack-logo-300x82.webp",
  "polylang-logo-300x72.webp",
  "shortpixel-logo-300x62.webp",
  "complianz-logo-300x67.webp",
];

export default function PluginsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widests text-gray-500 mb-4">
        Integrations  
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Simply Static works with your favorite plugins
        </h2>

        <p className="text-gray-500 max-w-2xl max-auto mb-12">
          We keep integrating new plugins with Simply Static to make it easier than ever before to run Static WordPress.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {plugins.map((logo, i) => (
           <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center">
             <img 
             src={`/imageJ/${logo}`}
              alt="plugin"
              className="max-h-12 object-contain"
              />
           </div>
          ))}
        </div>
      </div>
    </section>
  )
}