"use client"
import GoGame from "@/components/buttonstart";
import React from "react";


export default function Home() {
  return (
    // Aprendi una nueva manera de poner fondos en tailwind
    // Con [-webkit-text-stroke:1px_black] es posible agregarle bordes negros o de cualquier color a las letras
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('/bg.jpg')] text-center p-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white font-bold [-webkit-text-stroke:1px_black]">Piedra, Papel, Tijera</h1>
      <div className="mt-6 md:mt-10">
        <GoGame/>
      </div>
      <p className=" text-xl md:text-3xl font-semibold px-4 py-2 rounded mt-4 text-white">
        Elige: gana, pierde o empata!
      </p>
    </div>
  );
}