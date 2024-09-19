class Color {
    constructor(index, colorName) {
        this.index = index;
        this.colorName = colorName;
    }

    getColorCode(colorName) {
        return this.colorsCode[colorName];
    }

    getRandomColor() {
        let index = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        let color = this.getPropertyByIndex(this.colorsCode, index);
        return {
            colorName: color
        }
    }
    
    getPropertyByIndex(obj, index) {
        const keys = Object.keys(obj);
        if (index >= 0 && index < keys.length) {
            return keys[index];
        }
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
