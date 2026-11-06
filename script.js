// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link-item');

  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
      header.classList.remove('scrolled');
      navLinks.forEach(link => link.classList.remove('scrolled'));
    }
  }
});
const bottoneTema = document.querySelector(".tema");

bottoneTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


const popupPreventivo = document.querySelector("#preventivo-popup");
const bottonePreventivo = document.querySelector(".preventivo");
const bottoneChiudi = document.querySelector("#chiudi-popup");
const invia_button =document.querySelector(`#invia_button`);


bottonePreventivo.addEventListener("click", () => {
  popupPreventivo.hidden = false;
});

bottoneChiudi.addEventListener("click", () => {
  popupPreventivo.hidden = true;
});

invia_button.addEventListener("click", () => {
  const messaggio = document.querySelector("#messaggio-grazie");

  messaggio.textContent = "Grazie! Abbiamo ricevuto la tua richiesta.";
  messaggio.hidden = false;

  setTimeout(() => {
    popupPreventivo.hidden = true;
  }, 2000);
});