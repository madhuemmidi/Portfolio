// small tweak — say hi in the console :)
console.log("hey! thanks for opening devtools. — madhuri");

document.addEventListener("DOMContentLoaded", () => {
  const f = document.querySelector("footer p");
  if (f) f.textContent = f.textContent.replace("2026", new Date().getFullYear());
});