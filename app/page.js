"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "/components/navbar";
import Status from "/components/status";
import { geoCentroid } from "d3-geo";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

const geoUrl = "/states-10m.json";
const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export default function Home() {
  const isOnline = true;

  return (
    <div className="max-w-2xl px-4 mx-auto">
      <Navbar />
      <Status />
      <div className="mt-10 mb-10">
        <h1 className="font-semibold text-gray-300">about</h1>

        <p className="mt-2">hey, im ritvik 👋</p>
        <p className="mt-2">i was born in ohio but now live in san diego, ca</p>
        <p className="mt-2">
          currently im working on a hacker house, exploring VR/AR, and tinkering
          with LLMs
        </p>
        <p className="mt-2">
          prev. i was involved with a few startups, tried (and failed) some of
          my own
        </p>
      </div>
      <div className="pt-5">
        <h1 className="font-semibold text-gray-300">travel log</h1>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#ccc"
                    geography={geo}
                    fill="#fff"
                  />
                ))}
              </>
            )}
          </Geographies>
          <Marker coordinates={[-84.479716, 39.147889]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-80.614645, 28.30936]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-117.161087, 32.715736]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-118.2437, 34.0522]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-122.4194, 37.7749]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-121.4944, 38.5816]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-104.9903, 39.7392]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-95.3698, 29.7604]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
          <Marker coordinates={[-87.6298, 41.8781]}>
            <circle
              className="blur-[1.5px] animate-pulse"
              r={4}
              fill="#f87171"
            />
          </Marker>
        </ComposableMap>
      </div>
    </div>
  );
}
