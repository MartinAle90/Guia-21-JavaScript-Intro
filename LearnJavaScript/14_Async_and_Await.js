function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function upperCaseAsync(s) {
    // this code waits here for 500 milliseconds
    await sleep(500);
    // done waiting. let's calculate and return the value
    return s.toUpperCase();
    
}

// sumAsync is an async function, which means it returns a Promise.
upperCaseAsync("edward").then((result) => {
    console.log("The result of the addition is:", result);
});