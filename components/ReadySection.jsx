

export default function ReadySection() {
  return (
    <section className="bg-[#5227e8] py-20 px-6 md:px-16">
      
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          Ready to Make WordPress Fast, Secure, and Maintenance-Free?
        </h2>

        <p className="text-white/90 text-lg mb-10">
          Choose the solution that fits your needs.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800">
            Simply Static Pro
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800">
            Simply Static Studio
          </button>
        </div>

      </div>
    </section>
  );
}