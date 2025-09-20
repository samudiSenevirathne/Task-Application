"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

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
  { id: 1, name: "Rosetta", movie: "Tinkerbell", color: "", image: RosettaImg },
  { id: 2, name: "Sadness", movie: "Inside Out", color: "", image: SadnessImg },
  { id: 3, name: "Disgust", movie: "Inside Out", color: "", image: DisgustImg },
  { id: 4, name: "Judy", movie: "Zootopia", color: "", image: JudyImg },
  { id: 5, name: "Moana", movie: "Moana", color: "", image: MoanaImg },
  { id: 6, name: "Vanellope", movie: "Vanellope", color: "", image: VanellopeImg },
];

export default function Detail() {
  const searchParams = useSearchParams();
  const cardId = searchParams ? Number(searchParams.get("cardId")) : null;

  const card = cardId ? cards.find((c) => c.id === cardId) : null;

  if (!card) return <div className="text-white text-cencardId=${card.id}ter mt-20">Card not found</div>;

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* NavBar */}
      <NavBar />

      {/* Detail Content */}
      <div className="w-full flex flex-col items-center mt-10 px-4 sm:px-10">
        <h1 className="text-4xl font-bold mb-4">{card.name}</h1>
        <p className="text-lg mb-6">
          <span className="opacity-80">Movie: </span>
          <span className="font-medium">{card.movie}</span>
        </p>

        <Image
          src={card.image}
          alt={card.name}
          className="max-w-xs sm:max-w-md md:max-w-lg object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
