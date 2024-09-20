/**
 * @param {string} carta
 * @param {int} turno
 * @param {array<int>} divCartasJugador
 * @returns {Array<string>} carta
 */

export const crearCarta = (carta, turno, divCartasJugador) => {
  const nuevacarta = document.createElement("img");
  nuevacarta.classList.add("carta");
  nuevacarta.src = `./assets/cartas/cartas/${carta}.png`;
  divCartasJugador[turno].append(nuevacarta);
};
