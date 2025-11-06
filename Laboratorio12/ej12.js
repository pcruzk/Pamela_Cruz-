let texto = prompt("Ingrese un texto: ");

const mayusculas = (texto) => {
    return texto.toUpperCase();
};

const agregarSigno = (texto) => {
    return texto + "!";
};

const componerTransformaciones = (f1, f2) => {
    return (texto) => {
        return f2(f1(texto));
    };
};

function main() {
    const transformar = componerTransformaciones(mayusculas, agregarSigno);
    const resultado = transformar(texto);
    alert(resultado); 
}

main();
