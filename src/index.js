const Cubo = require("./Cubo");

const cuboOriginal = new Cubo()
    .setCima("azul")
    .setBaixo("verde")
    .setDireita("branco")
    .setEsquerda("laranja")
    .setFrente("amarelo")
    .setTras("vermelho")
    .builder();

const cuboBaguncado = new Cubo()
.randomFaceColors();

console.log("Cubo Original:", JSON.stringify(cuboOriginal, null, 2));
console.log("Cubo Baguncado:", JSON.stringify(cuboBaguncado, null, 2));

cuboBaguncado.normalizeFace(cuboOriginal, cuboBaguncado, "azul")
