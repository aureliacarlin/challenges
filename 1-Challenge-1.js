 function findNumber(values) {
     let result = [];
  
     for (let i = 0; i < values.length; ++i) {
       if (0 <= values[i]) {
         console.log(values[i]);
          result[values[i]] = true;
        // console.log(result[values[i]])
        console.log(result)
       }     
     }
    // console.log(result)
       for (let i = 1; i <= result.length; ++i) {
         if (undefined === result[i]) {
             console.log(i);
           return i;
         }
       }
    console.log(1);
     return 1
   }
   findNumber([1, 4, 5, 6])



// function solution(A) {
//     const len = A.length;
//     const hash = {};
//     for (let i = 0; i < len; i++) {
//         hash[A[i]] = A[i];
//     }
//     for (let i = 1; i < 1000002; i++) {
//         if(!hash[i]) {
//             console.log(i)
//              return i;
//         }
//     }
//     return 1;
// }


// solution([-3,-2,-3])

//  function solution(A) {
//      for (i = 1; i < 1000000; i++) {
//        if(!A.includes(i)){
//         console.log(i)
//        return i;
//        }
//      }
//    }

// solution([1,2,3,4])



  //that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A js
