"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type Card = {
  id: number;
  title: string;
};

export default function ExampleCard() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setCards(response.data.slice(0, 5)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {cards.map((card) => (
        <div key={card.id} className="mb-4 p-3 border rounded shadow">
          <h2 className="font-bold">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}
