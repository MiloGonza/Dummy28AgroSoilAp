"use client";

import { use, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer,
  { ssr: false }
);

const TileLayer = dynamic(
    async () => (await import("react-leaflet")).TileLayer, {
    ssr: false,
}); 

export default function RasterMap() {
    useEffect(() => {
        const loadRasterMap = async () => {
            const L = await import("leaflet");
            const parseGeoraster = (await import("georaster")).default;
            const GeoRasterLayer = (await import("georaster-layer-for-leaflet")).default;

            //cargarr el archivo .tif
            const response = await fetch("/data/potasio.tif");
            const arrayBuffer = await response.arrayBuffer();
            const georaster = await parseGeoraster(arrayBuffer);

            const map = L.map("map").setView([4.5709, -74.2973], 6);

            //Base OSM
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(map);

            //capa raster
            const rasterLayer = new GeoRasterLayer({
                georaster,
                opacity: 0.7,
                resolution: 256, // optional parameter for adjusting the display resolution
            });

            rasterLayer.addTo(map);
            map.fitBounds(rasterLayer.getBounds());
        };
        loadRasterMap();
    }, []); 
    return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
}