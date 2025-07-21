document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const datos = {
    nombre: form.nombre.value,
    fecha: form.fecha.value,
    evento: form.evento.value,
    horario: form.horario.value,
    sena: form.sena.value,
    saldo: form.saldo.value,
    servicios: form.servicios.value,
    observaciones: form.observaciones.value,
  };

  const texto = `#00010\n\nCONFIRMACIÓN DE RESERVA\n\nNombre: ${datos.nombre}\nFecha: ${datos.fecha}\nTipo de evento: ${datos.evento}\nHorario: ${datos.horario}\nSeña: $${datos.sena}\nSaldo: $${datos.saldo}\n\nServicios incluidos:\n${datos.servicios}\n\nObservaciones:\n${datos.observaciones}\n\nSalón Igloo\n091 914 800`;

  document.getElementById("resultado").textContent = texto;
});
