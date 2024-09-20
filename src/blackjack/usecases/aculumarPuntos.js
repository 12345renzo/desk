/**
 * 
 * @param {string} carta 
 * @param {int} turno 
 * @param {array<int>} puntosJugadores
 * @returns {array<Integer>} puntos
 */

import { valorCarta } from "./valorCarta";

export const aculumarPuntos = (carta, turno, puntosJugadores) => {
  const smalls = document.querySelectorAll("small");
  puntosJugadores[turno] += valorCarta(carta);
  smalls[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
