export default function ReflectionPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
      
      <div className="max-w-4xl mx-auto">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Reflection
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Reflection is where learning becomes meaningful. Document your
            thoughts, insights, and lessons learned from ideas and experiments.
            This helps individuals and communities grow through shared learning.
          </p>
        </div>


        {/* Reflection Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">

          <div className="flex items-start gap-4">

            {/* Icon */}
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
              🧠
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No reflections yet
              </h2>

              <p className="text-gray-600 mb-4">
                Once experiments and ideas are completed, reflections will appear here.
                Reflections help capture insights, lessons learned, and outcomes.
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Create Reflection
              </button>

            </div>

          </div>

        </div>


        {/* Info Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="border rounded-lg p-6 bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-2">
              Why Reflection Matters
            </h3>

            <p className="text-gray-600 text-sm">
              Reflection helps transform experiences into meaningful knowledge.
              It allows individuals to analyze outcomes and improve future experiments.
            </p>
          </div>


          <div className="border rounded-lg p-6 bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-2">
              Community Learning
            </h3>

            <p className="text-gray-600 text-sm">
              Shared reflections help communities learn faster, avoid mistakes,
              and build on each other's discoveries.
            </p>
          </div>

        </div>


      </div>

    </main>
  );
}
