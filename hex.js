const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomHexDigit = () => {
  const hexDigits = "0123456789ABCDEF";
  return hexDigits[Math.floor(Math.random() * 16)];
};

btn.addEventListener("click", function () {
  const hexColor = "#" + Array.from({ length: 6 }, getRandomHexDigit).join("");
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
