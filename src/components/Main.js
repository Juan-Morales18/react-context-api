function Main({theme, texts}) {
  return (
    <main className={theme}>
      <p>{texts.mainWelcome}</p>
      <p>{texts.mainHello}</p>
    </main>
  );
}
export { Main };
