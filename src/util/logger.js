
function info (msg, options = {}) {
    let colorReset = "\x1b[0m";
    let color = options.color ? options.color : colorReset;
    let params = options.params ? options.params : "";
    
    console.info(`${color} ${msg} ${colorReset}`, params);
}

module.exports = {
    info
}