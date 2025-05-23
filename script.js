function mostrarCalculo() {
    const calculo = document.getElementById('calculo').value;
    const secciones = document.querySelectorAll('.calc-section');
    
    secciones.forEach(seccion => {
        seccion.classList.add('hidden');
        if (seccion.id === calculo) {
            seccion.classList.remove('hidden');
        }
    });
}

function validateInputs(...inputs) {
    return inputs.every(input => {
        if (!input || input === '' || isNaN(input)) {
            alert('Por favor, ingrese un valor numérico válido.');
            return false;
        }
        return true;
    });
}

function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const resultado = document.getElementById('resultadoVelocidad');

    if (!validateInputs(distancia, tiempo)) return;
    if (tiempo === 0) {
        resultado.textContent = 'Error: El tiempo no puede ser cero.';
        return;
    }

    const velocidad = distancia / tiempo;
    resultado.textContent = `Velocidad: ${velocidad.toFixed(2)} m/s`;
}

function calcularAceleracion() {
    const deltaV = parseFloat(document.getElementById('deltaV').value);
    const deltaT = parseFloat(document.getElementById('deltaT').value);
    const resultado = document.getElementById('resultadoAceleracion');

    if (!validateInputs(deltaV, deltaT)) return;
    if (deltaT === 0) {
        resultado.textContent = 'Error: El cambio de tiempo no puede ser cero.';
        return;
    }

    const aceleracion = deltaV / deltaT;
    resultado.textContent = `Aceleración: ${aceleracion.toFixed(2)} m/s²`;
}

function calcularFuerza() {
    const masa = parseFloat(document.getElementById('masaF').value);
    const aceleracion = parseFloat(document.getElementById('aceleracionF').value);
    const resultado = document.getElementById('resultadoFuerza');

    if (!validateInputs(masa, aceleracion)) return;

    const fuerza = masa * aceleracion;
    resultado.textContent = `Fuerza: ${fuerza.toFixed(2)} N`;
}

function calcularTrabajo() {
    const fuerza = parseFloat(document.getElementById('fuerzaW').value);
    const distancia = parseFloat(document.getElementById('distanciaW').value);
    const angulo = parseFloat(document.getElementById('angulo').value);
    const resultado = document.getElementById('resultadoTrabajo');

    if (!validateInputs(fuerza, distancia, angulo)) return;

    const radianes = angulo * Math.PI / 180;
    const trabajo = fuerza * distancia * Math.cos(radianes);
    resultado.textContent = `Trabajo: ${trabajo.toFixed(2)} J`;
}

function calcularEnergiaCinetica() {
    const masa = parseFloat(document.getElementById('masaK').value);
    const velocidad = parseFloat(document.getElementById('velocidadK').value);
    const resultado = document.getElementById('resultadoEnergiaCinetica');

    if (!validateInputs(masa, velocidad)) return;

    const energia = 0.5 * masa * velocidad * velocidad;
    resultado.textContent = `Energía Cinética: ${energia.toFixed(2)} J`;
}

function calcularEnergiaPotencial() {
    const masa = parseFloat(document.getElementById('masaU').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const g = 9.81;
    const resultado = document.getElementById('resultadoEnergiaPotencial');

    if (!validateInputs(masa, altura)) return;

    const energia = masa * g * altura;
    resultado.textContent = `Energía Potencial: ${energia.toFixed(2)} J`;
}

function calcularDensidad() {
    const masa = parseFloat(document.getElementById('masaD').value);
    const volumen = parseFloat(document.getElementById('volumen').value);
    const resultado = document.getElementById('resultadoDensidad');

    if (!validateInputs(masa, volumen)) return;
    if (volumen === 0) {
        resultado.textContent = 'Error: El volumen no puede ser cero.';
        return;
    }

    const densidad = masa / volumen;
    resultado.textContent = `Densidad: ${densidad.toFixed(2)} kg/m³`;
}

function calcularPresion() {
    const fuerza = parseFloat(document.getElementById('fuerzaP').value);
    const area = parseFloat(document.getElementById('area').value);
    const resultado = document.getElementById('resultadoPresion');

    if (!validateInputs(fuerza, area)) return;
    if (area === 0) {
        resultado.textContent = 'Error: El área no puede ser cero.';
        return;
    }

    const presion = fuerza / area;
    resultado.textContent = `Presión: ${presion.toFixed(2)} Pa`;
}

function calcularCarga() {
    const corriente = parseFloat(document.getElementById('corriente').value);
    const tiempo = parseFloat(document.getElementById('tiempoQ').value);
    const resultado = document.getElementById('resultadoCarga');

    if (!validateInputs(corriente, tiempo)) return;

    const carga = corriente * tiempo;
    resultado.textContent = `Carga Eléctrica: ${carga.toFixed(2)} C`;
}

function calcularVoltaje() {
    const corriente = parseFloat(document.getElementById('corrienteV').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);
    const resultado = document.getElementById('resultadoVoltaje');

    if (!validateInputs(corriente, resistencia)) return;

    const voltaje = corriente * resistencia;
    resultado.textContent = `Voltaje: ${voltaje.toFixed(2)} V`;
}