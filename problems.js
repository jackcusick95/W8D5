// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false 
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0) {
//         completionCallback(sum);
//         rl.close();
//     } else {
//         rl.question('Give me a number!!!', function (answer) {
//         const conNum = parseInt(answer);
//         sum += conNum;
        
//         if (numsLeft !== 1) {
//             console.log(`Partial sum is: ${sum}`);
//         } 

//         numsLeft -= 1;
//         addNumbers(sum, numsLeft, completionCallback);
//         });
//     }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}?`, function(answer) {
        if (answer === 'yes') {
            callback(true);
        } else if (answer === "no") {
            callback(false);
        } else {
            console.log('Answer needs to be yes or no');
        }
    });
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == arr.length - 1) {
        outerBubbleSortLoop();
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], callback);
        
    }
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

// const cb = function(param) {
//     console.log(`${param}`);
// } 

// askIfGreaterThan(2, 4, cb);

