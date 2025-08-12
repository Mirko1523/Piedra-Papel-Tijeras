"use client"

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

   return(
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <div>
      <button onClick={() => handlePlayerChoice('Piedra')}>
        Piedra
      </button>
      <button onClick={() => handlePlayerChoice('Papel')}>
        Papel
      </button>
      <button onClick={() => handlePlayerChoice('Tijera')}>
        Tijera
      </button>
      </div>
   
      {/* Renderizamos los resultados y elecciones */}
      {result && (
        <div>
       <p>Jugador: {playerChoice}</p>
       <p>Computadora: {computerChoice}</p>
       <h1>Resultado: {result}</h1>
      </div>
      )}

    </div>
   ) 
}
