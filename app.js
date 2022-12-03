function encrypt(str) {
    // shift each character in the string by 3 places
    let encrypted = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        encrypted += String.fromCharCode(charCode + 3);
    }

    return encrypted;
}

function decrypt(str) {
    // shift each character in the string by -3 places
    let decrypted = '';
    for (let i = 0; i <str.length; i++) {
        let charCode = str.charCodeAt(i);
        decrypted += String.fromCharCode(charCode - 3);
    }

    return decrypted;
}

// to use the cipher call the encrypt function

let original = 'Hello World';
let encrypted = encrypt(original);

let decrypted = decrypt(encrypted);

console.log(encrypted);

console.log(decrypted);