// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { app } from './firebaseConfig.js';
console.log(app);

import { beginning } from './view/templateBeginning.js';
import { login } from './view/templateLogin.js';

myFunction();
document.getElementById('root').innerHTML = beginning()
document.getElementById('root').appendChild(login ())