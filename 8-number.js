// function persistance(num) {
//     let indi = num.toString(10).split("").map(Number)
//     console.log(indi.length)
// }

function persistenceB(num) {
    var times = 0;
    num = num.toString();
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    console.log(times);
    return times;
  }

  persistenceB(1234);
//console.log(1*2*3*4)
console.log()
