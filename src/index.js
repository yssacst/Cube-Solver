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

logger.info("Original Cube -> ", { params: JSON.stringify(originalCube) });
logger.info("Crazy Cube-> ", { params: JSON.stringify(crazyCube) });

crazyCube.validateSide(originalCube, crazyCube);
