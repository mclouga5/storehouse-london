'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

// Fix for custom icons in Leaflet
const customMarker = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export interface MapProps {
  className?: string;
}

export default function Map({ className }: MapProps) {
  const lat = 51.53747;
  const lon = -0.06412;

  return (
    <MapContainer
      center={[lat, lon]} // Initial center
      zoom={13}
      scrollWheelZoom={false}
      className={cn(
        "w-full h-full rounded-lg shadow:md",
        className
      )}
      style={{ height: "400px", width: "100%" }} // Style to ensure proper sizing
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lon]} icon={customMarker}>
        <Popup>33 Brougham Road</Popup>
      </Marker>
    </MapContainer>
  );
}
