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

    // sides = Object.freeze({
    //     0: { name: "up", rightSide: "right", leftSide: "left", upSide: "back", downSide: "front" },
    //     1: { name: "down", rightSide: "right", leftSide: "left", upSide: "front", downSide: "back"},
    //     2: { name: "left", rightSide: "front", leftSide: "back", upSide: "up", downSide: "down"},
    //     3: { name: "back", rightSide: "left", leftSide: "right", upSide: "up", downSide: "down"},
    //     4: { name: "front", rightSide: "right", leftSide: "left", upSide: "up", downSide: "down"},
    //     5: { name: "right", rightSide: "back", leftSide: "front", upSide: "up", downSide: "down"},
    //   });  
    
    sides = Object.freeze({
        "up": { rightSide: "right", leftSide: "left", upSide: "back", downSide: "front" },
        "down": { rightSide: "right", leftSide: "left", upSide: "front", downSide: "back"},
        "left": { rightSide: "front", leftSide: "back", upSide: "up", downSide: "down"},
        "back": { rightSide: "left", leftSide: "right", upSide: "up", downSide: "down"},
        "front": { rightSide: "right", leftSide: "left", upSide: "up", downSide: "down"},
        "right": { rightSide: "back", leftSide: "front", upSide: "up", downSide: "down"},
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

    showSide(side) {
        const logger = require("./util/logger");
        const Color = require("./Color");
        
        logger.info(JSON.stringify(side.toString()));
        // logger.info(side.toUpperCase());

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
            this.showSide(this.getPropertyByIndex(this.sides, i));
    }
    
    getPropertyByIndex(obj, index) {
        const keys = Object.keys(obj);
        if (index >= 0 && index < keys.length) {
          return keys[index];
        } 
      }


    rightRotate(index, sideName) {
        
    }

    leftRotate(index) {
        
    }

    upRotate(index) {

    }

    downRotate(index) {
        
    }


}

module.exports = Cube;