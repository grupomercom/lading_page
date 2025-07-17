  const text = "¡Bienvenido Mr. Q te saluda! Participa en nuestros sorteos y gana fabulosos premios. ¡No te los pierdas!";
  let i = 0;
  const speed = 125; // velocidad de escritura
  let isDeleting = false;

  function typeWriter() {
    const element = document.getElementById("typewriter");

    if (isDeleting) {
      element.innerHTML = text.substring(0, i--);
    } else {
      element.innerHTML = text.substring(0, i++);
    }

    if (!isDeleting && i === text.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); // espera antes de borrar
    } else if (isDeleting && i === 0) {
      isDeleting = false;
      setTimeout(typeWriter, 500); // espera antes de escribir de nuevo
    } else {
      setTimeout(typeWriter, speed);
    }
  }

  window.onload = typeWriter;

  const pensamientos = [
    "¡Aprovecha el Combo Chupetones x3!",
    "Gomitas + Masmellos GRATIS, ¡consulta ya!",
    "Promoción válida hasta el 30 de junio.",
    "¡Consulta nuestras ofertas exclusivas!"
  ];

  let index = 0;
  const pensamientoElem = document.getElementById("mrq-pensamiento");

  setInterval(() => {
    index = (index + 1) % pensamientos.length;
    pensamientoElem.textContent = pensamientos[index];
  }, 5000); // cambia cada 5000ms = 5 segundos

  
