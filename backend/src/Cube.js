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
        for(let i = 0;  i < 3; i++) {
            let aux = this.front[i][index];
            this.front[i][index] = this.down[i][index];
            this.down[i][index] = this.back[i][index];
            this.back[i][index] = this.up[i][index];
            this.up[i][index] = aux;        
        }
        
        if(index == 0) {
            this.sideClockwiseRotate("L'");
        }

        if(index == 2) {
            this.sideClockwiseRotate("R");
        }
    }

    downRotate(index) {
        for(let i = 0;  i < 3; i++) {
            let aux = this.front[i][index];
            this.front[i][index] = this.up[i][index];
            this.up[i][index] = this.back[i][index];
            this.back[i][index] = this.down[i][index];
            this.down[i][index] = aux;
        
        }
        
        if(index == 0) {
            this.sideClockwiseRotate("L");
        }

        if(index == 2) {
            this.sideClockwiseRotate("R'");
        }
    }

    sideClockwiseRotate(side) {
        let auxSide = [[],[],[]];
        switch(side) {
            case "R":
                for(let i = 0; i < 3; i++) {
                    let count = 2;
                    for(let j = 0; j < 3; j++) {
                        auxSide[i][j] = this.right[count][i];
                        count--;
                    } 
                }
                
                this.right = auxSide;
                break;
            case "L":
            for(let i = 0; i < 3; i++) {
                let count = 2;
                for(let j = 0; j < 3; j++) {
                    auxSide[i][j] = this.left[count][i];
                    count--;
                } 
            }
            
            this.left = auxSide;
            break;
            case "U":
                for(let i = 0; i < 3; i++) {
                    let count = 2;
                    for(let j = 0; j < 3; j++) {
                        auxSide[i][j] = this.up[count][i];
                        count--;
                    } 
                }
                
                this.up = auxSide;
                break;
            case "D":
            for(let i = 0; i < 3; i++) {
                let count = 2;
                for(let j = 0; j < 3; j++) {
                    auxSide[i][j] = this.down[count][i];
                    count--;
                } 
            }
            
            this.down = auxSide;
            break;
            
        }
    }

    sideCounterClockwiseRotate(side) {
        // TODO
    }



    /**
     * @param {String} action
     * Valid options are:
     * R - Right clockwise;
     * R’- Right counterclockwise;
     * F - Front clockwise ;
     * F’- Front counterclockwise ;
     * L - Left clockwise;
     * L’- Left counterclockwise;
     * B - Back clockwise;
     * B’- Back counterclockwise;
     * U - Up clockwise;
     * U’- Up counterclockwise;
     * D - Down clockwise;
     * D’- Down counterclockwise;
     */
    action(action) {
        const logger = require("./util/logger");
        switch(action) {
            case "R":
                logger.info(action);
                this.upRotate(2);
                break;
            case "R'":
                logger.info(action);
                this.downRotate(2);
                break;
            case "L":
                logger.info(action);
                this.downRotate(0);
                break;
            case "L'":
                logger.info(action);
                this.upRotate(0);
                break;
            case "U":
                logger.info(action);
                this.leftRotate(0);
                break;
            case "U'":
                logger.info(action);
                this.rightRotate(0);
                break;
            case "B":
                logger.info(action);
                // TODO
                break;
            case "B'":
                logger.info(action);
                // TODO
                break;
            case "D":
                logger.info(action);
                this.rightRotate(2);
                break;
            case "D'":
                logger.info(action);
                this.leftRotate(2);
                break;
            case "F":
                logger.info(action);
                // TODO
                break;
            case "F'":
                logger.info(action);
                // TODO
                break;
        }

    }

}

module.exports = Cube;