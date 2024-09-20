/**
 * 
 * @param {string} carta 
 * @returns {int}
 */

export const valorCarta = (carta) => {
    if (!carta || carta.length === 0)
      throw new Error("Cartas Obligatorio");
  const valor = carta.substring(0, carta.length - 1);
  return !isNaN(valor) ? parseInt(valor) : valor === "A" ? 11 : 10;
};
