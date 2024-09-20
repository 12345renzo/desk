/**
 * @param {int} puntosJugador 
 * @param {array<string>} dexk
 * @param {array<int>} divCartasJugador
 * @param {array<int>} puntosJugadores
 * @returns {string} mensaje
 */

import { aculumarPuntos } from "./aculumarPuntos";
import { pedirCarta } from "./pedirCarta";
import { crearCarta } from "./crearCarta";

export const turnoComputadora = (
  puntosJugador,
  dexk,
  divCartasJugador,
  puntosJugadores
) => {
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(dexk);
    puntosComputadora = aculumarPuntos(carta, 1, puntosJugadores);
    //alert(puntosComputadora);
    crearCarta(carta, 1, divCartasJugador);
    if (puntosComputadora > 21) {
      alert("La computadora se pasó. ¡Ganaste!");
      return;
    } else if (puntosComputadora > puntosJugador && puntosComputadora <= 21) {
      alert("La computadora ganó. Lo siento, perdiste.");
      return;
    } else if (puntosJugador > 21) {
      alert("Te pasaste de 21. La computadora gana.");
      return;
    } else if (puntosComputadora === puntosJugador && puntosComputadora <= 21) {
      alert("Empate.");
      return;
    }
  } while (puntosComputadora <= 21 && puntosComputadora <= puntosJugador);
};