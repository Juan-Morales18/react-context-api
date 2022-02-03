function Header({ theme, handleTheme }) {
  return (
    <header className={theme}>
      <h2>Mi aplicacion sin Context API</h2>
      <h3>Mi cabecera</h3>
      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <input
        type="radio"
        name="theme"
        id="light"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light">Light</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark">Dark</label>
      <button>Inicir sesion</button>
    </header>
  );
}

export { Header };
