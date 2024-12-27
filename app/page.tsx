import {Globe} from "@/components/ui/globe";

export default function Home() {

    const globeConfig = {
        pointSize: 1,                     // Size of points on the globe
        globeColor: "#1d072e",            // Base color of the globe
        showAtmosphere: true,             // Display atmosphere effect
        atmosphereColor: "#ffffff",       // Color of the atmosphere
        atmosphereAltitude: 0.1,          // Height of the atmosphere layer
        emissive: "#000000",              // Emissive color of the globe
        emissiveIntensity: 0.5,           // Intensity of emissive light
        shininess: 0.9,                   // Shininess of the globe's surface
        polygonColor: "rgba(255,255,255,0.7)", // Color of globe polygons
        ambientLight: "#ffffff",          // Color of ambient light
        directionalLeftLight: "#ffffff",  // Color of left directional light
        directionalTopLight: "#ffffff",   // Color of top directional light
        pointLight: "#ffffff",            // Color of point light
        arcTime: 2000,                    // Duration of arc animation (ms)
        arcLength: 0.9,                   // Length of animated arcs
        rings: 1,                         // Number of rings to display
        maxRings: 3,                      // Maximum number of rings
        initialPosition: { lat: 0, lng: 0 }, // Initial globe position (latitude/longitude)
        autoRotate: true,                 // Automatically rotate the globe
        autoRotateSpeed: 1,               // Speed of auto-rotation
    };

    const data = [
        {
            order: 1,                       // Order of appearance
            startLat: 37.7749,              // Starting latitude
            startLng: -122.4194,            // Starting longitude
            endLat: 34.0522,                // Ending latitude
            endLng: -118.2437,              // Ending longitude
            arcAlt: 0.2,                    // Altitude of the arc
            color: "#ff5733",               // Color of the arc
        },
        {
            order: 2,
            startLat: 51.5074,
            startLng: -0.1278,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: "#33ff57",
        },
    ];


  return (
    <div>
        hi
        {/*<Globe globeConfig={globeConfig} data={data} />*/}
    </div>
  );
}
