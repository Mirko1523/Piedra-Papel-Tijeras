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
    // ESTE es el nuevo contenedor principal con el fondo.
    <main className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
      
      {/* El Navbar ahora está DENTRO del contenedor con fondo */}
      <Navbar />

      {/* A este div le quitamos las clases de fondo y lo usamos solo para centrar el contenido del juego. */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        
        {/* Contenedor de botones */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handlePlayerChoice(choice)}
              className="cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white flex flex-col items-center"
            >
              <Image
                src={`/${choice.toLowerCase()}.png`}
                width={200}
                height={100}
                alt={choice}
                className="drop-shadow-lg"
              />
              <span className="mt-2 text-xl font-bold text-white [-webkit-text-stroke:1px_black]">
                {choice}
              </span>
            </button>
          ))}
        </div>

        {/* Contenedor de resultados */}
        <div className="mt-10">
          {result && (
            <div className="text-center bg-black/50 p-6 rounded-xl shadow-2xl">
              <p className="text-white text-2xl">
                Computadora: <span className="font-bold">{computerChoice}</span>
              </p>
              <h2 className="text-white text-4xl font-bold mt-2">
                {result}
              </h2>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
