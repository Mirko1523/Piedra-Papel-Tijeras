"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";

const choices = ["Piedra", "Papel", "Tijera"]

export default function Game () {
  //Estado para los resultados
const [result, setResult] = useState(null)
//Estado para las elecciones del jugador y la computadora
const [playerChoice, setPlayerChoice] = useState(null)
const [computerChoice, setComputerChoice] = useState(null)

//Función para manejar la elección del jugador
const handlePlayerChoice = (choice) =>{
//Función para manejar la elección de la computadora
const computerChoice = choices [Math.floor(Math.random() * choices.length)]
//Guardamos la elección de la computadora
setComputerChoice(computerChoice);
const result = getResult(choice, computerChoice);
//Mostramos los resultados
setResult(result)
setPlayerChoice(choice)

}

//Variantes de las elecciones y resultados
const getResult = (player, computer) =>{
 if (player === computer){
    return 'Es un empate!'

 }else if(
    (player === 'Piedra' && computer === 'Tijera') ||
    (player === 'Tijera' && computer === 'Papel') ||
    (player === 'Papel' && computer === 'Piedra') 
 ){

 return 'Felicidades has ganado!'

 }else{
    return '¡Has perdido, intentalo otra vez!'
 }
} 

 return (
  <main className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
    <Navbar />

    <div className="flex flex-col items-center justify-center flex-grow p-4 md:py-8">
      
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handlePlayerChoice(choice)}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col items-center bg-black/20 hover:bg-black/40 p-4 rounded-2xl shadow-lg"
          >
            <Image
              src={`/${choice.toLowerCase()}.png`}
              width={180} 
              height={100}
              alt={choice}
             className="drop-shadow-lg w-28 h-auto md:w-36 lg:w-44 transition-transform group-hover:scale-110"
            />
            <span className="mt-3 text-lg md:text-xl font-bold text-white [-webkit-text-stroke:1px_black]">
              {choice}
            </span>
          </button>
        ))}
      </div>


      <div className="mt-8 md:mt-12 w-full max-w-md px-4">
        {result && (
          <div className="text-center bg-black/50 p-4 md:p-6 rounded-xl shadow-2xl">
            <p className="text-xl md:text-2xl text-white">
              Computadora: <span className="font-bold">{computerChoice}</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              {result}
            </h2>
          </div>
        )}
      </div>

    </div>
  </main>
);
}
