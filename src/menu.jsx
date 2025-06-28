import MapComponent from "./MapComponent";


function Menu() {
    return (
        <div className="relative w-screen h-screen bg-gray-100">
        <MapComponent />
        <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
            {/* Top Bar */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/80 px-6 py-3 rounded-lg shadow-md z-10">
                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded">
                    ✈️ Fly Mode
                </button>
                <div className="text-red-500 font-bold">🔌 Not Connected</div>
                <div className="flex gap-3 items-center">
                    <span className="text-gray-700 cursor-pointer">DISARMED</span>
                    <span className="text-green-600 font-bold cursor-pointer">ARMED</span>
                </div>
            </div>

            {/* Left Panel */}
            <div className="absolute bottom-5 left-5 z-10 bg-white/90 p-5 rounded-lg shadow-lg w-fit">
                {/* Instruments */}
                <div className="flex justify-center gap-10 mb-4">
                    <div className="w-20 h-20 bg-gray-300 rounded-full shadow-inner flex items-center justify-center text-xs">Attitude</div>
                    <div className="w-20 h-20 bg-gray-300 rounded-full shadow-inner flex items-center justify-center text-xs">Heading</div>
                </div>

                {/* Info Panel */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-medium text-gray-800">
                    <div className="flex flex-col gap-2">
                        <div className="bg-white px-4 py-1 rounded shadow text-center">NULL - 0</div>
                        <div className="bg-white px-4 py-1 rounded shadow text-center">📡 No GPS</div>
                        <div className="bg-white px-4 py-1 rounded shadow text-center">🛠️ 0</div>
                        <div className="bg-red-200 px-4 py-1 rounded shadow text-center">📶 0%</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-white px-4 py-1 rounded shadow text-center">📏 0 m</div>
                        <div className="bg-white px-4 py-1 rounded shadow text-center">⏱ 0.00 m/s</div>
                        <div className="bg-white px-4 py-1 rounded shadow text-center">🌬️ 0.00 m/s</div>
                        <div className="bg-white px-4 py-1 rounded shadow text-center">🔋 0%</div>
                    </div>
                </div>

                {/* Full Data Button */}
                <div className="text-center mt-4">
                    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded shadow text-sm text-black">Full Data</button>
                </div>
            </div>

            {/* Right Buttons */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 z-10">
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
            <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-10">
                <button className="bg-white px-3 py-1 rounded shadow text-xl text-black">+</button>
                <button className="bg-white px-3 py-1 rounded shadow text-xl text-black">−</button>
                <button className="bg-white px-3 py-1 rounded shadow text-sm text-black">3D</button>
            </div>
        </div>
        </div>
    );
}

export default Menu;
