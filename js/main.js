(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-300px");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 90,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

// Fecha establecida (28 de junio de 2024)
const weddingDate = new Date("November 16, 2024 17:00:00").getTime();

// Función para actualizar el contador cada segundo
const countdown = setInterval(() => {
  const now = new Date().getTime(); // Fecha actual
  const timeRemaining = weddingDate - now; // Diferencia en milisegundos

  // Cálculos de días, horas, minutos y segundos
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Mostrar los valores en el HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si la cuenta regresiva ha terminado
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML =
      "¡Felicidades! ¡Hoy es el día de Nuestra boda!";
  }
}, 1000);

//PARA EL ENVIO DE LOS DATOS AL EXCEL
// function SendFormGoogleSheets (){
//   $.ajax({
//     url:'https://script.google.com/macros/s/AKfycbxIzhVyJZu_DQQ5-YzBtVl9V_VZKpEykj-_4NWd0DlnD0qvCzH4yH9fKWS_tGVsZoT4/exec',
//     type:'post',
//     data:$("#weddingForm").serializeArray(),
//     success: function(){
//       alert("Registro exitoso")
//     },
//     error: function(){
//       alert("Error en el Registro :(")
//     }
// });
// }
const scriptURL = 'https://script.google.com/macros/s/AKfycbxIzhVyJZu_DQQ5-YzBtVl9V_VZKpEykj-_4NWd0DlnD0qvCzH4yH9fKWS_tGVsZoT4/exec';
const form = document.forms['weddingForm'];
const submitButton = document.getElementById('btnSubmit'); // Selecciona el botón de envío

form.addEventListener('submit', e => {
    e.preventDefault();
    submitButton.disabled = true; // Deshabilita el botón al enviar el formulario

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Mostrar la alerta de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Tus datos han sido registrados con éxito.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                form.reset(); // Limpia los campos del formulario
                submitButton.disabled = false; // Vuelve a habilitar el botón
            });
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Mostrar alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrió un error al registrar tus datos. Intenta de nuevo.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                submitButton.disabled = false; // Vuelve a habilitar el botón
            });
        });
});
$(document).ready(function() {
  // Muestra el modal al hacer clic en el botón "Mostrar Creador de Invitación"
  $(".open-modal").click(function (e) {
      e.preventDefault(); // Evita la acción predeterminada del enlace
      $("#invitationModal").modal("show");
  });

  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $(".back-to-top").fadeIn("slow");
      } else {
          $(".back-to-top").fadeOut("slow");
      }
  });

  $(".back-to-top").click(function (e) {
      e.preventDefault(); // Evita la acción predeterminada del enlace
      // Desplazarse hacia arriba
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
  });
});


