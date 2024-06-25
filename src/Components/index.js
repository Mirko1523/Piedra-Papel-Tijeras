import React, { useState } from 'react'

const choices = ['Piedra', 'Papel', 'Tijeras']

function FunctionsOnTheGame (){
const [result, setResult] = useState('')
const [PlayerChoice, setPlayerChoice] = useState('')

const handlePlayerChoice = (choice) =>{

const computerChoice = choices [Math.floor(Math.random() * choices.length)]    
const result = getResult(choice, computerChoice);
setResult(result)
setPlayerChoice(choice)

}

const getResult = (player, computer) =>{
 if (player === computer){
    return 'Es un empate!'

 }else if(
    (player === 'Piedra' && computer === 'Tijeras') ||
    (player === 'Tijeras' && computer === 'Papel') ||
    (player === 'Papel' && computer === 'Piedra') 
 ){

 return 'Felicidades has ganado!'

 }else{
    return '¡Has perdido, intentalo otra vez!'
 }
} 
   return(
    <div>
        <h1> Divierteté en el MITICO JUEGO piedra, papel o tijeras </h1>
    <div>
        <button>
            
        </button>
    </div>
    <div>

    </div>
    </div>
   )
}

export default FunctionsOnTheGame