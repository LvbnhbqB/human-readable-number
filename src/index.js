module.exports = function toReadable(number) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let result = "";

    if (number === 0) {
        result = "zero";
        return String(result);
    }

    if (number < 20) {
        result = units[number];
        return String(result);
    }

    const hundred = Math.floor(number / 100);
    const teen = number % 100;
    const ten = Math.floor((number % 100) / 10);
    const one = number % 10;

    if (hundred > 0) {
        result = units[hundred] + " hundred";
    }

    if (teen < 20) {
        result = result + " " + units[teen];
        return result.trimEnd();
    } else {
        result = result + " " + tens[ten];
        result = result.trimStart();
    }

    if (one > 0) {
        result = result + " " + units[one];
    }
    return result.trimEnd();
};
