function toggleForm() {
  document.getElementById("login-form").style.display =
    document.getElementById("login-form").style.display === "none"
      ? "block"
      : "none";
  document.getElementById("signup-form").style.display =
    document.getElementById("signup-form").style.display === "none"
      ? "block"
      : "none";
}
