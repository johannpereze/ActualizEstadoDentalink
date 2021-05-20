
import dentalinkKey from './key.js'


// Obtenemos el botón a partir de su id. En este caso lo llamaremos testButton
var button = document.getElementById('mainButton');

// Registramos el evento
button.addEventListener('click', actualizarCitasId);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function actualizarCitasId() {

  //Guardar IDS
  var contenidoCaja = document.getElementById("textoCitas").value

  var contenidoCajaArray = document.getElementById("textoCitas").value.split('\n');

  contenidoCajaArray = contenidoCajaArray.filter(Boolean); // Elimina los elementos nulos o vacíos que son: false, null, undefined, 0, NaN.

  console.log(contenidoCajaArray)
  

  for (let index = 0; index < contenidoCajaArray.length; index++) {
    var settings = {
      "url": "https://api.dentalink.healthatom.com/api/v1/citas/" + contenidoCajaArray[index],
      "method": "PUT",
      "timeout": 0,
      "headers": {
        "Authorization": "Token " + dentalinkKey,
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "id_estado": 24
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(contenidoCajaArray[index]);
      console.log(response);
    });

    console.log('Esperemos un momento...');
    await sleep(3000);

  }
  console.log("Finalizado");
}