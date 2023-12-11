let spanishWords = [
  "despertarse 🌅",
  "comer 🍽️",
  "beber 🥤",
  "dormir 😴",
  "hablar 💬",
  "caminar 🚶",
  "correr 🏃",
  "leer 📖",
  "escribir ✍️",
  "ver 👀",
  "zanahoria 🥕",
  "manzana 🍏",
  "perro 🐕",
  "gato 🐈",
  "casa 🏠",
  "despertarse 🌅",
  "comer 🍽️",
  "beber 🥤",
  "dormir 😴",
  "hablar 💬",
  "caminar 🚶",
  "correr 🏃",
  "leer 📖",
  "escribir ✍️",
  "ver 👀",
  "zanahoria 🥕",
  "manzana 🍏",
  "perro 🐕",
  "gato 🐈",
  "casa 🏠",
  "amor 💌",
  "sol ☀️",
  "lluvia ☔",
  "estrella ⭐",
  "árbol 🌳",
  "flor 🌸",
  "mar 🌊",
  "montaña ⛰️",
  "río 🌊",
  "libro 📚",
];
let germanWords = [
  "aufwachen 🌅",
  "essen 🍽️",
  "trinken 🥤",
  "schlafen 😴",
  "sprechen 💬",
  "gehen 🚶",
  "laufen 🏃",
  "lesen 📖",
  "schreiben ✍️",
  "sehen 👀",
  "karotte 🥕",
  "apfel 🍏",
  "hund 🐕",
  "katze 🐈",
  "haus 🏠",
  "aufwachen 🌅",
  "essen 🍽️",
  "trinken 🥤",
  "schlafen 😴",
  "sprechen 💬",
  "gehen 🚶",
  "laufen 🏃",
  "lesen 📖",
  "schreiben ✍️",
  "sehen 👀",
  "karotte 🥕",
  "apfel 🍏",
  "hund 🐕",
  "katze 🐈",
  "haus 🏠",
  "Liebe 💌",
  "Sonne ☀️",
  "Regen ☔",
  "Stern ⭐",
  "Baum 🌳",
  "Blume 🌸",
  "Meer 🌊",
  "Berg ⛰️",
  "Fluss 🌊",
  "Buch 📚",
];

function modifyElements() {
  let elements = document.querySelectorAll("a.user-link");
  let random = Math.floor(Math.random() * 100);

  elements.forEach((element, index) => {
    let saltedIndex = (index + random) % spanishWords.length;
    if (index % 2 == 0) {
      element.textContent = `${
        germanWords[(saltedIndex + 1) % spanishWords.length]
      }`;
    } else {
      element.textContent = `${spanishWords[saltedIndex]}`;
    }
  });
}

setTimeout(() => modifyElements(), 100);
