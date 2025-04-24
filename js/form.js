document.getElementById('contacto-campos').addEventListener('submit', async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const mensajeResultado = document.getElementById('mensaje-resultado');

  try {
      const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
          form.reset();

          mensajeResultado.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme.';
          mensajeResultado.className = 'mensaje-exito';
          mensajeResultado.style.display = 'block';
      } else {
          const errorData = await response.json();
          console.error('Error en la respuesta:', errorData);

          mensajeResultado.textContent = 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.';
          mensajeResultado.className = 'mensaje-error';
          mensajeResultado.style.display = 'block';
      }
  } catch (error) {
      console.error('Error en el envío:', error);

      mensajeResultado.textContent = 'Hubo un problema al enviar tu mensaje. Por favor, verifica tu conexión.';
      mensajeResultado.className = 'mensaje-error';
      mensajeResultado.style.display = 'block';
  }

  setTimeout(() => {
      mensajeResultado.style.display = 'none';
  }, 5000);
});