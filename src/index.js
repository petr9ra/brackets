module.exports = function check(str, bracketsConfig) {

    let stack = [];

    if (str.length % 2 !== 0){
        return false
    }

    for (let i = 0; i < str.length; i++) {

        let activeSymbol = str[i];

        for (let j = 0; j < bracketsConfig.length; j++) {

            let topElement = stack[stack.length - 1];

            if (activeSymbol === bracketsConfig[j][1] && topElement === bracketsConfig[j][0]) {
                stack.pop();
            } else if (activeSymbol === bracketsConfig[j][0]) {
                stack.push(activeSymbol);
            }
        }
    }
    return stack.length === 0 ? true : false;
};
