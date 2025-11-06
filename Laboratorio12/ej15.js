function crearContador() {
    let contador = 0;

    const incrementar = () => ++contador;
    const resetear = () => (contador = 0);

    return { incrementar, resetear };
}