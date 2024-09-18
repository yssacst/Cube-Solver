class Color {
    constructor(index, colorName) {
        this.index = index;
        this.colorName = colorName;
    }

    getColorCode(colorName) {
        return this.colorsCode[colorName];
    }

    colorsCode =  Object.freeze({
        "red": "\x1b[31m",
        "green": "\x1b[32m",
        "yellow": "\x1b[33m",
        "blue": "\x1b[34m",
        "white": "\x1b[37m",
        "orange": "\x1b[38;5;208m"
    });   
}

module.exports = Color;
