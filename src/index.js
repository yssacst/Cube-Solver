const Cube = require("./Cube");
const logger = require("./util/logger")

const originalCube = new Cube()
    .setUp("blue")
    .setDown("green")
    .setRight("white")
    .setLeft("orange")
    .setFront("yellow")
    .setBack("red")
    .builder();

const crazyCube = new Cube()
    .randomSideColors();

// logger.info("Original Cube -> ", { params: JSON.stringify(originalCube) });
// logger.info("Crazy Cube-> ", { params: JSON.stringify(crazyCube) });

// crazyCube.validateSide(originalCube, crazyCube);

// logger.info("Original Cube -> ", { params: JSON.stringify(originalCube) });
// logger.info("Crazy Cube-> ", { params: JSON.stringify(crazyCube) });

// originalCube.showSide("front");
// originalCube.showSide("back");
// originalCube.showSide("up");
// originalCube.showSide("down");
// originalCube.showSide("left");
// originalCube.showSide("right");

// crazyCube.showSide("front");
// crazyCube.showSide("back");
// crazyCube.showSide("up");
// crazyCube.showSide("down");
// crazyCube.showSide("left");
// crazyCube.showSide("right");

crazyCube.showCube();
// crazyCube.showSide("front");
