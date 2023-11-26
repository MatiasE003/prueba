"use strict";
class CookieClicker {
  constructor() {
    this.cookies = 0;
    this.canClick = true;
  }
  clickCookie() {
    if (this.canClick) {
      this.cookies++;
      this.updateUI();
      this.canClick = false;
      setTimeout(() => {
        this.canClick = true;
      }, 100);
    }
  }
  updateUI() {
    // Actualiza la interfaz de usuario con la cantidad actual de cookies
    const cookieDisplay = document.getElementById("cookieDisplay");
    if (cookieDisplay) {
      cookieDisplay.textContent = `Cookies: ${this.cookies}`;
    }
  }
}
