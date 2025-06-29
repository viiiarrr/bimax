import MapComponent from "./MapComponent";

function Menu() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <MapComponent />
      </div>

      {/* UI Layer di atas Map */}
      <div className="relative w-full h-full z-10 pointer-events-none">
        {/* Top Bar */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/80 px-6 py-3 rounded-lg shadow-md pointer-events-auto">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded pointer-events-auto">
            ✈️ Fly Mode
          </button>
        </div>

        
        {/* Status di kanan atas dalam card */}
        <div className="absolute top-4 right-4 z-10">
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow flex items-center gap-4">
            <div className="text-red-500 font-bold flex items-center gap-1">
            🔌 Not Connected
            </div>
            <span className="text-gray-700">DISARMED</span>
            <span className="text-green-600 font-bold cursor-pointer">ARMED</span>
        </div>
        </div>

        {/* Left Panel */}
        <div className="absolute bottom-4 left-4 bg-white/90 p-6 rounded-2xl shadow-lg w-max pointer-events-auto">
          <div className="flex justify-center gap-10 mb-6">
            <div className="w-28 h-28 bg-gray-300 rounded-full shadow-inner flex items-center justify-center text-base font-semibold">
              Attitude
            </div>
            <div className="w-28 h-28 bg-gray-300 rounded-full shadow-inner flex items-center justify-center text-base font-semibold">
              Heading
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-semibold text-gray-800">
            <div className="flex flex-col gap-3">
              <div className="bg-white px-5 py-2 rounded shadow text-center">NULL - 0</div>
              <div className="bg-white px-5 py-2 rounded shadow text-center">📡 No GPS</div>
              <div className="bg-white px-5 py-2 rounded shadow text-center">🛠️ 0</div>
              <div className="bg-red-200 px-5 py-2 rounded shadow text-center">📶 0%</div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white px-5 py-2 rounded shadow text-center">📏 0 m</div>
              <div className="bg-white px-5 py-2 rounded shadow text-center">⏱ 0.00 m/s</div>
              <div className="bg-white px-5 py-2 rounded shadow text-center">🌬️ 0.00 m/s</div>
              <div className="bg-white px-5 py-2 rounded shadow text-center">🔋 0%</div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg shadow text-base font-medium">
              Full Data
            </button>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 pointer-events-auto">
          {["📋 Plans", "✅ Preflight Check", "🔘 Start", "⚙️ Action", "📡 Follow", "🎯 Tracker"].map((label, i) => (
            <button
              key={i}
              className="bg-white hover:bg-gray-200 px-4 py-2 rounded shadow text-sm text-black"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Zoom & 3D */}
        <div className="absolute bottom-5 right-5 flex flex-col gap-2 pointer-events-auto">
          <button className="bg-white px-3 py-1 rounded shadow text-xl text-black">+</button>
          <button className="bg-white px-3 py-1 rounded shadow text-xl text-black">−</button>
          <button className="bg-white px-3 py-1 rounded shadow text-sm text-black">3D</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
