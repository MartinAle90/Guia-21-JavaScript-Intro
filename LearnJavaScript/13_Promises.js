function upperCaseAsync(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (s == null) {
                reject("String es nulo");
            } else {
                resolve(s.toUpperCase());
            }

        }, 1000);
    });
}

// Example usage
const inputString = 'example';
upperCaseAsync(inputString)
    .then(uppercasedString => console.log(uppercasedString))
    .catch(error => console.error(error));