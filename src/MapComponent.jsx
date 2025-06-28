// src/MapComponent.jsx
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    if (mapContainer && mapContainer._leaflet_id) return; // Cegah re-inisialisasi

    const map = L.map("map").setView([-7.47, 110.22], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);
  }, []);

  return <div id="map" className="absolute inset-0 z-0" />;
}

export default MapComponent;
