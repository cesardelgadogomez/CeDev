//Limpiar datos de formulario y lanzar un aviso una vez se haya enviado el mensaje.
document.getElementById('contacto-campos').addEventListener('submit', async function (event) {
  event.preventDefault(); // Evita la redirección predeterminada

  const form = event.target;
  const formData = new FormData(form);
  const mensajeResultado = document.getElementById('mensaje-resultado');

  try {
      // Envía el formulario
      const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
          // Limpia el formulario
          form.reset();

          // Muestra mensaje de éxito
          mensajeResultado.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme.';
          mensajeResultado.className = 'mensaje-exito';
          mensajeResultado.style.display = 'block';
      } else {
          const errorData = await response.json();
          console.error('Error en la respuesta:', errorData);

          // Muestra mensaje de error
          mensajeResultado.textContent = 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.';
          mensajeResultado.className = 'mensaje-error';
          mensajeResultado.style.display = 'block';
      }
  } catch (error) {
      console.error('Error en el envío:', error);

      // Muestra mensaje de error en caso de fallo general
      mensajeResultado.textContent = 'Hubo un problema al enviar tu mensaje. Por favor, verifica tu conexión.';
      mensajeResultado.className = 'mensaje-error';
      mensajeResultado.style.display = 'block';
  }

  // Oculta el mensaje después de 5 segundos
  setTimeout(() => {
      mensajeResultado.style.display = 'none';
  }, 5000);
});