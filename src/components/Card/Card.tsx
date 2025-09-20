"use client";
import React, { useState, useEffect } from "react";
import AnotherBar from "../AnotherBar/AnotherBar";
import Image, { StaticImageData } from "next/image";

import RosettaImg from "@/assets/Rosetta.png";
import SadnessImg from "@/assets/sadness.png";
import DisgustImg from "@/assets/Disgust.png";
import JudyImg from "@/assets/Judy.png";
import MoanaImg from "@/assets/Moana.png";
import VanellopeImg from "@/assets/Vanellope.png";

type Card = {
    id: number;
    name: string;
    movie: string;
    color: string;
    image: StaticImageData;
};

const cards: Card[] = [
    { id: 1, name: "Rosetta", movie: "Tinkerbell", color: "bg-gradient-to-tr from-red-500 via-red-500/90 to-white", image: RosettaImg },
    { id: 2, name: "Sadness", movie: "Inside Out", color: "bg-gradient-to-tr from-blue-500 via-blue-500/90 to-white", image: SadnessImg },
    { id: 3, name: "Disgust", movie: "Inside Out", color: "bg-gradient-to-tr from-green-500 via-green-500/90 to-white", image: DisgustImg },
    { id: 4, name: "Judy", movie: "Zootopia", color: "bg-gradient-to-tr from-indigo-500 via-indigo-500/90 to-white", image: JudyImg },
    { id: 5, name: "Moana", movie: "Moana", color: "bg-gradient-to-tr from-orange-500 via-orange-500/90 to-white", image: MoanaImg },
    { id: 6, name: "Vanellope", movie: "Vanellope", color: "bg-gradient-to-tr from-green-300 via-green-300/90 to-white", image: VanellopeImg },
];


export default function Card() {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3.5);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCount(1); // Mobile
            } else if (width < 1024) {
                setVisibleCount(2); // Tablet
            } else {
                setVisibleCount(3.5); // Desktop
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const next = () => {
        setIndex((prev) => Math.min(prev + 1, cards.length - visibleCount));
    };

    const prev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="w-full flex flex-col items-center mt-6">
            {/* Card row */}
            <div className="relative w-[80%] overflow-hidden">
                <div
                    className="flex gap-4 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(index * 100) / visibleCount}%)`,
                    }}
                >
                    {cards.map((card, cardIndex) => {

                        const isActive = cardIndex >= index && cardIndex < index + visibleCount;

                        return (
                            <div
                                key={card.id}
                                className={`flex-shrink-0 text-white p-4 relative transition-all duration-500`}
                                style={{ width: `${100 / visibleCount}%` }}
                            >
                                <div className="relative flex flex-col items-center">
                                    {/* Image with dynamic size */}
                                    <Image
                                        src={card.image}
                                        alt={card.name}
                                        className={`object-contain -mb-16 z-20 transition-all duration-500 ${isActive ? "max-h-56" : "max-h-36"
                                            }`}
                                    />

                                    {/* Card background */}
                                    <div
                                        className={`rounded-2xl ${card.color} p-4 pt-20 w-50 z-10`}
                                    >
                                        <h2 className="text-xl font-medium mt-2">{card.name}</h2>
                                        <p className="text-sm">
                                            <span className="opacity-80 font-light">Movie: </span>
                                            <span className="font-medium">{card.movie}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <AnotherBar onPrev={prev} onNext={next} />
        </div>
    );
}