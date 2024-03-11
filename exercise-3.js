/*          Tablero de ajedrez
  Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, 
  usando caracteres de nueva línea para separar las líneas. 
  En cada posición de la cuadrícula hay un espacio o un carácter "#". 
  Los caracteres deberían de formar un tablero de ajedrez. 

  */

let size = 8;
let board = "";
for( let y = 0; y < size; y++){
  for(let x = 0; x < size; x++){
    if((x + y) % 2 == 0){
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

