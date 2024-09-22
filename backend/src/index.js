const Cube = require("./Cube");
const logger = require("./util/logger")

const originalCube = new Cube()
    .setUp("blue")
    .setDown("green")
    .setRight("red")
    .setLeft("orange")
    .setFront("yellow")
    .setBack("write")
    .builder();

const crazyCube = new Cube()
    .randomSideColors();

// logger.info("Original Cube -> ", { params: JSON.stringify(originalCube) });
// logger.info("Crazy Cube-> ", { params: JSON.stringify(crazyCube) });

// logger.info("Original Cube -> ", { params: JSON.stringify(originalCube) });
// logger.info("Crazy Cube-> ", { params: JSON.stringify(crazyCube) });

// originalCube.showSide("front");
// originalCube.showSide("back");
// originalCube.showSide("up");
// originalCube.showSide("down");
// originalCube.showSide("left");
// originalCube.showSide("right");

// crazyCube.showSide("back");
// crazyCube.showSide("up");
// crazyCube.showSide("down");
// crazyCube.showSide("front");
// crazyCube.showSide("left");
// crazyCube.showSide("right");

// crazyCube.rightRotate(0, "front")

// crazyCube.showSide("front");
// crazyCube.showSide("left");
// crazyCube.showSide("right");

// crazyCube.showCube();

// logger.info("----------------original cube----------------");
// crazyCube.showCube();
crazyCube.showSide("right");

// logger.info("--------------------------------------------");

// originalCube.rightRotate(1, "front")
// originalCube.leftRotate(1, "front")
crazyCube.action("R");
// originalCube.downRotate(1, "front")

// logger.info("----------------modified cube----------------");
// crazyCube.showCube();
crazyCube.showSide("right");
// logger.info("--------------------------------------------");
