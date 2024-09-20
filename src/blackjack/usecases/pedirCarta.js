/**
 * @param {array<string>} dexk
 * @returns {string}
 */

export const pedirCarta = (dexk) => {
    if (!dexk || dexk.length === 0) throw new Error("Baraja Obligatorio");

  return dexk.pop();
};
