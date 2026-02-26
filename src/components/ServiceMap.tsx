import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Next.js/Webpack
const icon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: #2563eb; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

export default function ServiceMap() {
    const sanfordCoords: [number, number] = [28.8029, -81.2731];
    const radiusInMeters = 15 * 1609.34; // 15 miles in meters

    // Fix for map rendering issues on first load
    useEffect(() => {
        // Dispatch window resize event after short delay to ensure map tiles load completely
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }, []);

    return (
        <div className="h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-0 relative">
            <MapContainer
                center={sanfordCoords}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <Circle
                    center={sanfordCoords}
                    pathOptions={{
                        fillColor: '#3b82f6',
                        fillOpacity: 0.15,
                        color: '#2563eb',
                        weight: 2
                    }}
                    radius={radiusInMeters}
                />
                <Marker position={sanfordCoords} icon={icon}>
                    <Popup>
                        <div className="text-center font-sans">
                            <strong>Sanford Cleaning</strong><br />
                            Serving 15-Mile Radius
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
