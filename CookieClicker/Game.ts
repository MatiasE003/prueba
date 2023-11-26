class CookieClicker {
  private cookies: number = 0;
  private canClick: boolean = true;

  public clickCookie(): void {
    if (this.canClick) {
      this.cookies++;
      this.updateUI();
      this.canClick = false;
      setTimeout(() => {
        this.canClick = true;
      }, 100);
    }
  }

  private updateUI(): void {
    // Actualiza la interfaz de usuario con la cantidad actual de cookies
    const cookieDisplay = document.getElementById("cookieDisplay");
    if (cookieDisplay) {
      cookieDisplay.textContent = `Cookies: ${this.cookies}`;
    }
  }
}
