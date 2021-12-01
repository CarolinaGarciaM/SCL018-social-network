import { signup } from '../firebaseConfig.js';

export const beginning = () => {
  const divBeginning = document.createElement("div");
  divBeginning.className = "view-container";
  const viewBeginning = `

    <header>
    <div class = "images-container">
    <img class = "logoFuego" src = "resources/images/logofuego.png" alt = "logo de fuego con carita blanca y sonriente">
    <img class = "imgPropagar" src = "resources/images/propagar.png" alt = "logo del nombre de la página web, propagar en mayúscula y degradado de naranjos y
    amarillos con contorno de fuego">
    <div class="title-container">
    <h1 class="title">Difusión de talleres y conversatorios</h1>
    </div>
    </header>
    <div class = "beginning-container">
    <button id = "login"  class = "btn-login">INICIAR SESIÓN</button>
    <button id = "register"  class = "btn-register">REGÍSTRATE</button>
    </div>
    `;

  divBeginning.innerHTML = viewBeginning;
  //window.location.hash//
  divBeginning.querySelector("#login").addEventListener("click", () => {
    window.location.hash = "#/login";
  }
  );

  divBeginning.querySelector("#register").addEventListener("click", () => {
    window.location.hash = "#/register";
  }
  );


  return divBeginning;
  console.log(beginning);
};
