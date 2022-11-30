function digitalDecipher(eMessage, key){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var output = "";
    key = Array.from(String(key), Number)

    for(var i = 0; i < eMessage.length; i++){
        output += alphabet[eMessage[i] - 1 - key[i % key.length]];
}

return output;

}

a = digitalDecipher([20, 12, 18, 30, 21], 1939);
b = digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
c = digitalDecipher([6, 4, 1, 3, 9, 20], 100);

console.log(a) // Output: scout
console.log(b) // Output: mubashir
console.log(c) // Output: edabit