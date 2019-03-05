function tryGex(N){
try {
    var o = N.match(/\D+/g).map(x => x.match(/[A-Z]/) ? x.length : -1);
    console.log(Math.max.apply(null, o));
 } catch (e) {
    console.log(-1);
 }
}

tryGex("ab34afhKg98")

let R = "slkjaKJ34Fdsl";

var re = R.match(/\D+/g);
console.log(re)
var res = R.match(/\D/);
console.log(res)

var str = "Is thisthis all there is?";
var patt1 = /this/gi;
var result = str.match(patt1);
console.log(result)