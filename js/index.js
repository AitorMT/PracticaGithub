"use strict";

window.onload = () => {
  const generarHex = () => {
    let hex = "";
    for (let i = 0; i < 6; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
    }
    return hex;
  };

  document.getElementById("boton").addEventListener("click", () => {
    document.body.style.backgroundColor = "#" + generarHex();
  });
};