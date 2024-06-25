# Piedra-Papel-Tijeras

Aquí voy a contar por primera vez como yo realizo un proyecto.
En esta ocasión hare el paso a paso de como YO HE CREADO ESTE JUEGO TAN MITICO.

-Comencé inicializando el proyecto con NPX CREATE-REACT-APP (y le puse un nombre a mi proyecto).
-Luego edite los archivos que me traía a mi gusto adapantando a lo que yo necesito en este proyecto.
-Le puse un icono de una mano FAVICON el cual se encuentra en esta pagina: https://iconos8.es/icon/set/manos/fluency.
-Cree una carpeta Components y un archivo llamado index.js que es donde trabajaré durante todo el proyecto.
-Dentro de index.js:
*Importé React
*hice una function llamada FunctionsOnTheGame()
*Fuera de la funcion cree una variable llamada choices la cual esta conformada por 3 opciones: Piedra, Papel, Tijeras.
*Ahora, dentro de la funcion cree una VARIABLE en donde voy a trabajar con las ESTRUCTURAS IF,ELSE IF Y ELSE para que el usuario al jugar pueda obtener 3 distintas variables de resultados.
*Luego de eso cree una variable llamada hanlderPlayerChoice en la cual se crea una constante computerChoice en la cual la computadora va a sacar el resultado mediante math.floor y math.random. Y una constante result en donde el resultado se va a obtener del CHOICE del usuario.
*Luego cree los STATES(o estados) de cada uno de las variables.
*Ahora dentro del RETURN cree un div en donde inserté un h1 como titulo para darle una bienvenida al usuario.