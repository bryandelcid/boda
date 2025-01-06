const targetDate = new Date("2025-01-18T18:00:00");

    // Referencias a los elementos del DOM
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Función para actualizar la cuenta regresiva
    function updateCountdown() {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        // Si la fecha ya pasó
        clearInterval(interval);
        daysElement.textContent = 0;
        hoursElement.textContent = 0;
        minutesElement.textContent = 0;
        secondsElement.textContent = 0;
        return;
      }

      // Cálculo de días, horas, minutos y segundos
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Actualización de los elementos del DOM
      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    }

    // Actualización inicial
    updateCountdown();

    // Actualización cada segundo
    const interval = setInterval(updateCountdown, 1000);