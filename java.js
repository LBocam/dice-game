// Definir variables
var jugador = 1;

// funcion tirar dado
function tirar_dado() {
  var dado = Math.floor(Math.random() * 6 + 1);
  document.getElementById("valor_dado").innerHTML = dado;
  return dado;
}

/**
 * @param num_jugador
 *
 * @return siguiente
 */
function cambiar_jugador(turno) {
  var jugador = 1;
  turno = turno + 1;
  if (turno % 2 === 0) {
    console.log("PAR: " + turno);
    return jugador + 1; // 2
  } else {
    console.log("IMPAR: " + turno);
    return jugador; // 1
  }
}

var titulo = document.createElement("h1");
titulo.innerHTML = "HELLO WORLD";

document.getElementById("app").innerHTML = `
<h1>Juego 01</h1>
<div>
<h1 id="valor_dado"></h1>

<h2 id="jugador"></h2>
</div>
`;
document.getElementById("app").append(titulo);
// función tirar dado
tirar_dado();

// funcion cambiar jugador

// representar turnos
for (var turno = 0; turno <= 20; turno++) {
  console.log("i" + turno);
  cambiar_jugador(turno);
}

