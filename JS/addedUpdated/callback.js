
//1. Synchronous Callback

/*
    A synchronous callback executes immediately as the program runs line by line.

    The main code waits until the callback finishes.
*/

const nums = [1, 2, 3];
console.log('START');
nums.forEach((num)=>console.log(num));
console.log('DONE');

/*
    All below are synchronous callback:
        map()
        filter()
        reduce()
        find()
        some()
        every()
        sort()
        forEach()
*/



//2. asynchronous callback:

/*
    Asynchronous Callback:

        An asynchronous callback runs later.

        JavaScript does NOT execute it immediately.

        Instead, it schedules the callback to run after:

            - a timer
            - API response
            - file read
            - event
            - network request
*/

console.log('Start');
setTimeout(()=>{
    console.log('processing..')
}, 2000);
console.log('End');



//3. Difference
/*
    Key difference:
    
        | Feature            | Synchronous Callback | Asynchronous Callback |
        | ------------------ | -------------------- | --------------------- |
        | Execution          | Immediately          | Later                 |
        | Blocks next code?  | Yes                  | No                    |
        | Runs line-by-line? | Yes                  | No                    |
        | Used in            | Array methods        | Timers, APIs, events  |
        | Examples           | `map`, `filter`      | `setTimeout`, `fetch` |

*/
