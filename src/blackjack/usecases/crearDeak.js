import _ from "underscore";
/**
 * 
 * @param {array<string>} tipos 
 * @param {array<string>} special 
 * @returns {array<string>}
 */
export const crearDeak = (tipos, special) => {
  if (!tipos || tipos.length === 0) throw new Error("Tipos de Cartas Obligatorio");
  let dexk = [];
  for (let i = 2; i <= 10; i++) {
    for (let ti of tipos) {
      dexk.push(i + ti);
    }
  }
  for (let tipo of tipos) {
    for (let esp of special) {
      dexk.push(esp + tipo);
    }
  }
  return _.shuffle(dexk);
};
