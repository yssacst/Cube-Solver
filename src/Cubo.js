class Cubo {
    
    constructor(frente, tras, cima, baixo, esquerda, direita) {
        this.frente = frente;
        this.tras = tras;
        this.cima = cima;
        this.baixo = baixo;
        this.esquerda = esquerda;
        this.direita = direita;
    }

    setFrente(colorName) {
        this.frente = this.buildFace(colorName);
        return this;
    }

    setTras(colorName) {
        this.tras = this.buildFace(colorName);
        return this;
    }
    
    setCima(colorName) {
        this.cima = this.buildFace(colorName);
        return this;
    }
    
    setBaixo(colorName) {
        this.baixo = this.buildFace(colorName);
        return this;
    }

    setEsquerda(colorName) {
        this.esquerda = this.buildFace(colorName);
        return this;
    }

    setDireita(colorName) {
        this.direita = this.buildFace(colorName);
        return this;
    }

    builder () {
        return new Cubo(
            this.frente,
            this.tras, 
            this.cima, 
            this.baixo, 
            this.esquerda, 
            this.direita);
    }

    faces = Object.freeze({
        0: "frente",
        1: "tras",
        2: "direita",
        3: "esquerda",
        4: "cima",
        5: "baixo"
      });    

    /**
     * Cria uma face para o cubo com uma cor
     * @param {String} colorName 
     * @returns {Color[][]} face retorna uma matriz 3x3 de uma unica cor
     */
    buildFace(colorName) {
        const Color = require("./Color");

        return [
            [ new Color([[0],[0]], colorName), new Color([[0],[1]], colorName), new Color([[0],[1]], colorName) ],
            [ new Color([[1],[0]], colorName), new Color([[1],[1]], colorName), new Color([[1],[1]], colorName) ],
            [ new Color([[2],[0]], colorName), new Color([[2],[1]], colorName), new Color([[2],[1]], colorName) ]
        ];
    }

    randomFaceColors() {
        const Color = require("./Color");

        this.baixo = [
            [ new Color([[0],[0]], "verde"), new Color([[0],[1]], "laranja"), new Color([[0],[1]], "azul") ],
            [ new Color([[1],[0]], "amarelo"), new Color([[1],[1]], "verde"), new Color([[1],[1]], "verde") ],
            [ new Color([[2],[0]], "vermelho"), new Color([[2],[1]], "azul"), new Color([[2],[1]], "laranja") ]
        ];

        this.cima = [
            [ new Color([[0],[0]], "vermelho"), new Color([[0],[1]], "laranja"), new Color([[0],[1]], "azul") ],
            [ new Color([[1],[0]], "amarelo"), new Color([[1],[1]], "verde"), new Color([[1],[1]], "verde") ],
            [ new Color([[2],[0]], "verde"), new Color([[2],[1]], "azul"), new Color([[2],[1]], "laranja") ]
        ];
        this.frente = [
            [ new Color([[0],[0]], "verde"), new Color([[0],[1]], "laranja"), new Color([[0],[1]], "azul") ],
            [ new Color([[1],[0]], "amarelo"), new Color([[1],[1]], "verde"), new Color([[1],[1]], "verde") ],
            [ new Color([[2],[0]], "vermelho"), new Color([[2],[1]], "azul"), new Color([[2],[1]], "laranja") ]
        ];
        this.tras = [
            [ new Color([[0],[0]], "verde"), new Color([[0],[1]], "laranja"), new Color([[0],[1]], "azul") ],
            [ new Color([[1],[0]], "amarelo"), new Color([[1],[1]], "verde"), new Color([[1],[1]], "verde") ],
            [ new Color([[2],[0]], "vermelho"), new Color([[2],[1]], "azul"), new Color([[2],[1]], "laranja") ]
        ];
        this.esquerda = [
            [ new Color([[0],[0]], "verde"), new Color([[0],[1]], "laranja"), new Color([[0],[1]], "azul") ],
            [ new Color([[1],[0]], "amarelo"), new Color([[1],[1]], "verde"), new Color([[1],[1]], "verde") ],
            [ new Color([[2],[0]], "vermelho"), new Color([[2],[1]], "azul"), new Color([[2],[1]], "laranja") ]
        ];
        
        this.direita = [
            [ new Color([[0],[0]], "verde"), new Color([[0],[1]], "laranja"), new Color([[0],[1]], "azul") ],
            [ new Color([[1],[0]], "amarelo"), new Color([[1],[1]], "verde"), new Color([[1],[1]], "verde") ],
            [ new Color([[2],[0]], "vermelho"), new Color([[2],[1]], "azul"), new Color([[2],[1]], "laranja") ]
        ];
        
        return new Cubo(
            this.frente,
            this.tras, 
            this.cima, 
            this.baixo, 
            this.esquerda, 
            this.direita
        );
    }

    normalizeFace(cubo, face) {
        console.log("FRENTE")
        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                if (face.frente[i][j].colorName == cubo.frente[i][j].colorName) {
                    console.log(`\x1b[1m \x1b[32m posição certa! Face: ${JSON.stringify(face.frente[i][j])} | Cubo: ${JSON.stringify(cubo.frente[i][j])} \x1b[0m`)
                } else {
                    console.log("\x1b[31m posição errada! Face:", face.frente[i][j], " | Cubo: ", cubo.frente[i][j])
                }
            }
        }

        console.log("TRAS")
        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                if (face.tras[i][j].colorName == cubo.tras[i][j].colorName) {
                    console.log(`\x1b[1m \x1b[32m posição certa! Face: ${JSON.stringify(face.tras[i][j])} | Cubo: ${JSON.stringify(cubo.tras[i][j])} \x1b[0m`)
                } else {
                    console.log("\x1b[31m posição errada! Face:", face.tras[i][j], " | Cubo: ", cubo.tras[i][j])
                }
            }
        }

        console.log("ESQUERDA")
        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                if (face.esquerda[i][j].colorName == cubo.esquerda[i][j].colorName) {
                    console.log(`\x1b[1m \x1b[32m posição certa! Face: ${JSON.stringify(face.esquerda[i][j])} | Cubo: ${JSON.stringify(cubo.esquerda[i][j])} \x1b[0m`)
                } else {
                    console.log("\x1b[31m posição errada! Face:", face.esquerda[i][j], " | Cubo: ", cubo.esquerda[i][j])
                }
            }
        }

        console.log("DIREITA")
        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                if (face.direita[i][j].colorName == cubo.direita[i][j].colorName) {
                    console.log(`\x1b[1m \x1b[32m posição certa! Face: ${JSON.stringify(face.direita[i][j])} | Cubo: ${JSON.stringify(cubo.direita[i][j])} \x1b[0m`)
                } else {
                    console.log("\x1b[31m posição errada! Face:", face.direita[i][j], " | Cubo: ", cubo.direita[i][j])
                }
            }
        }

        console.log("CIMA")
        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                if (face.cima[i][j].colorName == cubo.cima[i][j].colorName) {
                    console.log(`\x1b[1m \x1b[32m posição certa! Face: ${JSON.stringify(face.cima[i][j])} | Cubo: ${JSON.stringify(cubo.cima[i][j])} \x1b[0m`)
                } else {
                    console.log("\x1b[31m posição errada! Face:", face.cima[i][j], " | Cubo: ", cubo.cima[i][j])
                }
            }
        }

        console.log("BAIXO")
        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                if (face.baixo[i][j].colorName == cubo.baixo[i][j].colorName) {
                    console.log(`\x1b[1m \x1b[32m posição certa! Face: ${JSON.stringify(face.baixo[i][j])} | Cubo: ${JSON.stringify(cubo.baixo[i][j])} \x1b[0m`)
                } else {
                    console.log("\x1b[31m posição errada! Face:", face.baixo[i][j], " | Cubo: ", cubo.baixo[i][j])
                }
            }
        }
    }
}

module.exports = Cubo