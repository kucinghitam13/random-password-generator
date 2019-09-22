const output = document.getElementById("output");

function setPassword() {
    output.textContent = generatePassword();
}

function generatePassword() {
    const length = 12;
    const alphaCount = Math.floor(Math.random() * (length - 2)) + 1;
    const numberCount = Math.floor(Math.random() * (length - alphaCount - 1)) + 1;

    const specials = '!@#$%^&*(){}[]|;:<>,./?'.slice('');

    var password = '';

    for (i = 0; i < length; i++) {
        var randomChar
        if (i < alphaCount) {
            var randomInt = Math.floor(Math.random() * 52);
            randomChar = String.fromCharCode(
                randomInt + (randomInt < 26 ? 65 : 71));
        } else if (i < alphaCount + numberCount) {
            randomChar = Math.floor(Math.random() * 10);
        } else {
            randomChar = specials[Math.floor(Math.random() * specials.length)];
        }
        var randomPosition = Math.random() * (password.length + 1);
        password = [
            password.slice(0, randomPosition),
            randomChar,
            password.slice(randomPosition)
        ].join('');
    }
    console.log('p ' + password);
    return password;
}
