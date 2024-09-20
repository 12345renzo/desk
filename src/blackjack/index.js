
import _ from "underscore";
import {crearDeak,pedirCarta} from './usecases'
import { turnoComputadora } from "./usecases/turnoComputadora";
import { aculumarPuntos } from "./usecases/aculumarPuntos";
import { crearCarta } from "./usecases/crearCarta";

/*el use strict ase que las varibles no
    sean modificadas em la consola del navegador*/
let dexk = [];
const tipos = ["C", "D", "H", "S"],
  special = ["A", "J", "Q", "K"];
let puntosJugadores = [];
//referencias de html
const btnPedir = document.querySelector("#pedir"),
  btnDetener = document.querySelector("#detener"),
  btnNuevo = document.querySelector("#nuevo");
btnPedir.disabled = true;
btnDetener.disabled = true;
const smalls = document.querySelectorAll("small");
const divCartasJugador = document.querySelectorAll(".divCartas");
//crear nueva varaja

const iniciliciar = (numeroJugador = 2) => {
  dexk = crearDeak(tipos,special);
  puntosJugadores = Array(numeroJugador).fill(0);
};


/* eventos */
btnPedir.addEventListener("click", () => {
  const cart = pedirCarta(dexk);
  const puntojugador = aculumarPuntos(cart, 0,puntosJugadores);
  crearCarta(cart, 0, divCartasJugador);

  if (puntojugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntojugador, dexk, divCartasJugador, puntosJugadores);
    btnNuevo.disabled = false;
  } else if (puntojugador == 21) {
    alert("genial 21");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntojugador, dexk, divCartasJugador, puntosJugadores);
    btnNuevo.disabled = false;
  }
});
btnDetener.addEventListener("click", () => {
  turnoComputadora(puntosJugadores[0], dexk, divCartasJugador, puntosJugadores);
  //alert(puntosJugadores[0]);
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  btnNuevo.disabled = false;
});
btnNuevo.addEventListener("click", () => {
  dexk = [];
  iniciliciar();
  smalls[0].innerText = 0;
  smalls[1].innerText = 0;
  divCartasJugador[0].innerHTML = "";
  divCartasJugador[1].innerHTML = "";
  btnPedir.disabled = false;
  btnDetener.disabled = false;
  puntosJugadores[0] = 0;
  puntosJugadores[1] = 0;
  btnNuevo.disabled = true;
});
