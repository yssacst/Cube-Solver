class Cube { 
    constructor(up, down,  left,  back,  front, right) {
        this.up = up;
        this.down = down;
        this.left = left;
        this.back = back;
        this.front = front;
        this.right = right;
    }

    setUp(colorName) {
        this.up = this.buildSide(colorName);
        return this;
    }
    
    setDown(colorName) {
        this.down = this.buildSide(colorName);
        return this;
    }
    
    setLeft(colorName) {
        this.left = this.buildSide(colorName);
        return this;
    }
    
    setBack(colorName) {
        this.back = this.buildSide(colorName);
        return this;
    }
    
    setFront(colorName) {
        this.front = this.buildSide(colorName);
        return this;
    }

    setRight(colorName) {
        this.right = this.buildSide(colorName);
        return this;
    }

    builder () {
        return new Cube(
            this.up,
            this.down, 
            this.left, 
            this.back, 
            this.front,
            this.right
        );
    }

    sides = Object.freeze({
        0: "front",
        1: "down",
        2: "left",
        3: "back",
        4: "up",
        5: "right"
      });  
    
    /**
     * Cria uma face para o cubo com uma cor
     * @param {String} colorName 
     * @returns {Color[][]} face retorna uma matriz 3x3 de uma unica cor
     */
    buildSide(colorName) {
        const Color = require("./Color");

        let side = [[],[],[]];

        for (let i = 0; i < 3 ; i++)
            for (let j = 0; j < 3 ; j++) 
                side[i][j] = new Color([[i],[j]], colorName);
        
        return side;
    }

    randomSideColors() {
        const Color = require("./Color");
        const randomCube = new Cube();
        for (let i = 0 ; i < 6; i++) {
            let sideName = this.sides[i];
            this[sideName] = [[],[],[]];

            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++){
                    this[sideName][j][k] = new Color().getRandomColor();
                }
            }
        }

        
        return new Cube(
            this.up,
            this.down, 
            this.left, 
            this.back, 
            this.front,
            this.right
        );
    }

    validateSide(cube, side) {
        const logger = require("./util/logger");

        for (let s = 0 ; s < 6; s++) {
            let sideName = this.sides[s];
            
            console.log(`Side ${sideName}`);
            
            for ( let i = 0; i < 3; i++) {
                for (let j = 0 ; j < 3 ; j++) {
                    if (side[sideName][i][j].colorName == cube[sideName][i][j].colorName) {
                        logger.info(`Right position! ${JSON.stringify(side[sideName][i][j].index)} ${side[sideName][i][j].colorName}`,
                            { color: "\x1b[32m" }
                        );
                    } else {
                        logger.info(`Wrong position! ${JSON.stringify(side[sideName][i][j].index)} ${side[sideName][i][j].colorName}`,
                            { color: "\x1b[31m" }
                        );
                    }

                }
            }
        }
    }

    showSide(side) {
        const logger = require("./util/logger");
        const Color = require("./Color");
        
        logger.info(side.toUpperCase());

        for ( let i = 0; i < 3; i++) {
            for (let j = 0 ; j < 3 ; j++) {
                logger.infoWithOutBreakLine('[=]',
                    { color: new Color()
                        .getColorCode(
                            this[side][i][j].colorName
                        )
                    }
                );
            }
            logger.info("");
        }
        logger.info("");
    }

    showCube() {
        for (let i = 0; i < 6; i++)
            this.showSide(this.sides[i]);
    }
    
    rightRotate(index) {
        const logger = require("./util/logger");
        logger.info("rightRotate");

        for(let i = 0;  i < 3; i++) {
            let aux = this.front[index][i];
            this.front[index][i] = this.left[index][i];
            this.left[index][i] = this.back[index][i];
            this.back[index][i] = this.right[index][i];
            this.right[index][i] = aux;

            // TODO ROTACIONAR UP E DOWN
        }
    }

    leftRotate(index) {
        const logger = require("./util/logger");
        logger.info("leftRotate");

        for(let i = 0;  i < 3; i++) {
            let aux = this.front[index][i];
            this.front[index][i] = this.right[index][i];
            this.right[index][i] = this.back[index][i];
            this.back[index][i] = this.left[index][i];
            this.left[index][i] = aux;
        
            // TODO ROTACIONAR UP E DOWN
        }
    }

    upRotate(index) {
        const logger = require("./util/logger");
        logger.info("upRotate");

        for(let i = 0;  i < 3; i++) {
            let aux = this.front[i][index];
            this.front[i][index] = this.down[i][index];
            this.down[i][index] = this.back[i][index];
            this.back[i][index] = this.up[i][index];
            this.up[i][index] = aux;
        
            // TODO ROTACIONAR LEFT E RIGHT
        }
    }

    downRotate(index) {
        const logger = require("./util/logger");
        logger.info("downRotate");

        for(let i = 0;  i < 3; i++) {
            let aux = this.front[i][index];
            this.front[i][index] = this.up[i][index];
            this.up[i][index] = this.back[i][index];
            this.back[i][index] = this.down[i][index];
            this.down[i][index] = aux;
        
            // TODO ROTACIONAR LEFT E RIGHT
        }
    }

}

module.exports = Cube;