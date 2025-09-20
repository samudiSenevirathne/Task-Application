"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { XMarkIcon, ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import RosettaImg from "@/assets/Rosetta.png";
import SadnessImg from "@/assets/sadness.png";
import DisgustImg from "@/assets/Disgust.png";
import JudyImg from "@/assets/Judy.png";
import MoanaImg from "@/assets/Moana.png";
import VanellopeImg from "@/assets/Vanellope.png";

import NavBar from "@/components/NavBar/NavBar";

type Card = {
  id: number;
  name: string;
  movie: string;
  color: string;
  image: any;
};

const cards: Card[] = [
  { id: 1, name: "Rosetta", movie: "Tinkerbell", color: "bg-gradient-to-tr from-red-500 via-red-500/90 to-white", image: RosettaImg },
  { id: 2, name: "Sadness", movie: "Inside Out", color: "bg-gradient-to-tr from-blue-500 via-blue-500/90 to-white", image: SadnessImg },
  { id: 3, name: "Disgust", movie: "Inside Out", color: "bg-gradient-to-tr from-green-500 via-green-500/90 to-white", image: DisgustImg },
  { id: 4, name: "Judy", movie: "Zootopia", color: "bg-gradient-to-tr from-indigo-500 via-indigo-500/90 to-white", image: JudyImg },
  { id: 5, name: "Moana", movie: "Moana", color: "bg-gradient-to-tr from-orange-500 via-orange-500/90 to-white", image: MoanaImg },
  { id: 6, name: "Vanellope", movie: "Vanellope", color: "bg-gradient-to-tr from-green-300 via-green-300/90 to-white", image: VanellopeImg },
];

export default function Detail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardId = searchParams ? Number(searchParams.get("cardId")) : null;
  const card = cardId ? cards.find((c) => c.id === cardId) : null;

  const [showAside, setShowAside] = useState(false);

  if (!card) return <div className="text-white text-center mt-20 text-xl">Card not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-tr text-gray-900 relative">
      {/* Navbar */}
      <NavBar />

      {/* Close Button */}
      <div
        onClick={() => router.push("http://localhost:3000/")}
        className="absolute top-12 right-4 sm:top-16 sm:right-6 lg:top-24 lg:right-10 flex items-center gap-2 sm:gap-4 cursor-pointer z-50"
      >
        <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        <h6 className="text-black text-sm hidden sm:inline">Close</h6>
      </div>

      {/* Desktop/Laptop Aside Bar */}
      <div className="hidden lg:flex flex-col items-center gap-20 px-10 self-center absolute bottom-0">
        <div className="flex flex-col items-center gap-30 px-10">
          <h2 className="transform -rotate-90 font-bold text-lg">{card.name}</h2>
          <h3 className="transform -rotate-90">Disney</h3>
        </div>
        <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </div>

      {/* Mobile/Tablet Hamburger Icon */}
      <div className="lg:hidden absolute top-16 left-4 z-50">
        <button
          onClick={() => setShowAside(true)}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow"
        >
          <Bars3Icon className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Mobile/Tablet Aside Bar */}
      {showAside && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4 flex flex-col justify-between">
          {/* Close Button on right side */}
          <div className="flex justify-end">
            <button onClick={() => setShowAside(false)} className="flex items-center gap-2">
              <XMarkIcon className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Aside Content */}
          <div className="flex flex-col items-start gap-4 mt-10">
            <h2 className="font-bold text-lg">{card.name}</h2>
            <h3 className="text-sm opacity-80">Disney</h3>
            <ChevronDownIcon className="w-5 h-5 text-black mt-2" />
          </div>
        </div>
      )}

      {/* Detail Card */}
      <div className="flex justify-center items-center py-8 px-4 w-full">
        <div
          className={`w-full lg:max-w-5xl bg-white rounded-tl-4xl rounded-br-4xl shadow-lg overflow-hidden flex flex-col lg:flex-row lg:absolute lg:bottom-0 lg:right-0 ${card.color} z-0`}
        >
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex items-start justify-center p-6 sm:p-8 relative lg:bottom-10 z-10">
            <Image
              src={card.image}
              alt={card.name}
              width={card.id === 5 ? 140 : 250}
              height={card.id === 5 ? 140 : 250}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white">{card.name}</h1>
                <p className="mt-2 text-white">
                  <span className="font-semibold">Movie:</span> {card.movie}
                </p>
              </div>
              <div className="w-20 h-14 lg:w-24 lg:h-16 bg-gray-200 rounded-lg"></div>
            </div>

            <div>
              <p className="mt-4 text-white leading-relaxed">
                {card.name} is a beloved character from {card.movie}. More
                description can go here… Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            {/* Example Clips Section */}
            <div className="mt-4">
              <h2 className="text-base lg:text-lg font-semibold mb-2 text-white">Clips</h2>
              <div className="flex gap-3 overflow-x-auto">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-14 lg:w-24 lg:h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-gray-500 text-xs lg:text-sm">Clip {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}