function addTokens(input, tokens){
    if (typeof input != "string") {
        throw "Invalid input";
    }
    if (input.length < 6) {
        throw "Input should have at least 6 characters";
    }
    tokens.forEach((t) => {
        if (typeof t.tokenName != "string") {
            throw "Invalid array format";
        }
});
if (!input.includes("...")) {
    return input;
} else {
    tokens.forEach((t) => {
        input = input.replace("...", `\${${t.tokenName}}`);
    });
    return input;
}
}

const app = {
    addTokens: addTokens
}

module.exports = app;