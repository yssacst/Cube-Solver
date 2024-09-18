
function info (msg, options = {}) {
    let colorReset = "\x1b[0m";
    let color = options.color ? options.color : colorReset;
    let params = options.params ? options.params : "";

    console.info(`${color} ${msg} ${colorReset}`, params);
}

function infoWithOutBreakLine(msg, options = {}) {
    let colorReset = "\x1b[0m";
    let color = options.color ? options.color : colorReset;

    process.stdout.write(`${color} ${msg} ${colorReset}`);
}

module.exports = {
    info,
    infoWithOutBreakLine
}