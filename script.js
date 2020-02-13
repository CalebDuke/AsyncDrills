
// function messageString (message) {
//     return message
// }

// let myMessage = messageString ("this is a string");
// setTimeout(function(){console.log(myMessage)}, 2000)

// function getWord(word) {
//     return word
// }

// let delayWord1 = getWord ("word1")
// let delayWord2 = getWord ("word2")
// let delayWord3 = getWord ("word3")
// let delayWord4 = getWord ("word4")
// setTimeout(function(){console.log(delayWord1)})
// setTimeout(function(){console.log(delayWord2)}, 2000)
// setTimeout(function(){console.log(delayWord3)}, 3000)
// setTimeout(function(){console.log(delayWord4)}, 4000)




// let done = () => (console.log("Job's done!"));
// // console.log(job());

// function countDown(num, callback) {
//         if (num > 0) {
//                 console.log(num);
//                 setTimeout(() => {
//                         countDown(num - 1, callback)
//                 }, 1000);
//         } else {
//                 callback();
//         }
// }

// countDown(4, done);


let lunchTime = true;

let orderMeSomeFood = (message) => {
        return new Promise((resolve, reject) => {
                 if (lunchTime) {
                         let lunchObj = {
                                 lunch: "Pizza",
                                 drink: "Beer"
                         }
                         resolve(lunchObj)
                 } else {
                         let err = new Error('ew');
                         reject(err)
                 }

        })
}
orderMeSomeFood(lunchTime)
        .then(res => console.log(res))
        .catch(err => console.log(err));

