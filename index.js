const axios = require('axios');

const log = (message) => {
    console.log(`[batch-${process.env.JOB_INDEX}] ${message}`);
};

const proceso = (minutos, minutoActual = 0) => {
    log(`Durmiendo hace ${minutoActual} minuto(s)`);
    if( minutoActual < minutos ) {
        setTimeout(() => proceso(minutos, minutoActual + 1), 1000 * 60);
    }
}

const SERVICE_ENDPOINT = "172.21.191.250:9090";

log(`Inicio de la instancia`);

axios.post(SERVICE_ENDPOINT, {"operationName":null,"variables":{},"query":"{\n  getUser(dni: \"72022415\") {\n    nombre\n  }\n}\n"})
  .then(function (response) {
    log(`Respuesta de la consulta ${JSON.stringify(response.data)}`);
    log(`Inicio de procesamiento`);
    proceso(25);
  })
  .catch(function (error) {
    log(`Error en la instancia ${error}`);
  });