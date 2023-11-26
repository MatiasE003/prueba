const game = new CookieClicker();

// Asocia el evento de clic del botón al método clickCookie
const clickCookie = document.getElementById("clickCookie");
if (clickCookie) {
  clickCookie.addEventListener("click", () => {
    game.clickCookie();
  });
}
