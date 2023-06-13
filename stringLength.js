function stringLength(str) {
     if (typeof str !== "string") {
       throw new Error("Input must be a string");
     }
    
    if (str.length >= 1 && str.length <= 10) {
        return str.length;
    } else {
        return "String must be between 1 and 10 characters";
    }
}

module.exports = stringLength;
