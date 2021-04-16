const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What do you think of node.js?", function (answer) {
//     console.log("Thank you for your valuable feedback.");
//     rl.close();
// });

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        const number = rl.question('Give me a number!!!', function(answer) {
            const conNum = parseInt(answer);
            console.log(`you added number: ${number}`);
            rl.close();
        });
    }
}

