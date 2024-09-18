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
        0: "up",
        1: "down",
        2: "left",
        3: "back",
        4: "front",
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
        
        this.down = [
            [ new Color([[0],[0]], "green"), new Color([[0],[1]], "orange"), new Color([[0],[1]], "blue") ],
            [ new Color([[1],[0]], "yellow"), new Color([[1],[1]], "green"), new Color([[1],[1]], "green") ],
            [ new Color([[2],[0]], "red"), new Color([[2],[1]], "blue"), new Color([[2],[1]], "orange") ]
        ];

        this.up = [
            [ new Color([[0],[0]], "red"), new Color([[0],[1]], "orange"), new Color([[0],[1]], "blue") ],
            [ new Color([[1],[0]], "yellow"), new Color([[1],[1]], "green"), new Color([[1],[1]], "green") ],
            [ new Color([[2],[0]], "green"), new Color([[2],[1]], "blue"), new Color([[2],[1]], "orange") ]
        ];
        this.front = [
            [ new Color([[0],[0]], "green"), new Color([[0],[1]], "orange"), new Color([[0],[1]], "blue") ],
            [ new Color([[1],[0]], "yellow"), new Color([[1],[1]], "green"), new Color([[1],[1]], "green") ],
            [ new Color([[2],[0]], "red"), new Color([[2],[1]], "blue"), new Color([[2],[1]], "orange") ]
        ];
        this.back = [
            [ new Color([[0],[0]], "green"), new Color([[0],[1]], "orange"), new Color([[0],[1]], "blue") ],
            [ new Color([[1],[0]], "yellow"), new Color([[1],[1]], "green"), new Color([[1],[1]], "green") ],
            [ new Color([[2],[0]], "red"), new Color([[2],[1]], "blue"), new Color([[2],[1]], "orange") ]
        ];
        this.left = [
            [ new Color([[0],[0]], "green"), new Color([[0],[1]], "orange"), new Color([[0],[1]], "blue") ],
            [ new Color([[1],[0]], "yellow"), new Color([[1],[1]], "green"), new Color([[1],[1]], "green") ],
            [ new Color([[2],[0]], "red"), new Color([[2],[1]], "blue"), new Color([[2],[1]], "orange") ]
        ];
        
        this.right = [
            [ new Color([[0],[0]], "green"), new Color([[0],[1]], "orange"), new Color([[0],[1]], "blue") ],
            [ new Color([[1],[0]], "yellow"), new Color([[1],[1]], "green"), new Color([[1],[1]], "green") ],
            [ new Color([[2],[0]], "red"), new Color([[2],[1]], "blue"), new Color([[2],[1]], "orange") ]
        ];
        
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
}

module.exports = Cube;