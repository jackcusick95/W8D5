const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false 
});

// rl.question("What do you think of node.js?", function (answer) {
//     console.log("Thank you for your valuable feedback.");
//     rl.close();
// });

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
            // rl.question('Give me a number!!!', function(answer) {
            // const conNum = parseInt(answer);
            // sum += conNum;
            // console.log(`your sum is: ${sum}`);

            // rl.close();
        // });
    }
        rl.question('Give me a number!!!', function (answer) {
        const conNum = parseInt(answer);
        sum += conNum;
        // console.log(`your sum is: ${sum}`);
        completionCallback(sum);

        numsLeft -= 1;
        addNumbers(sum, numsLeft, completionCallback);
        rl.close();
    });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));