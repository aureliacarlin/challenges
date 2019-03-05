/*
The Challenge:
You are setting up password validation for an email. Your password can only consist of letters, and has to have
at least one capital letter.
Write a function, that takes in one parameter, N, where N is a string of whole positive numbers and letters. 
The function must take that string, and find the longest sub-string within that string, that meets the criteria for a password,
and return the length of that substring.
Ex: N = 'Abc123f456ABcdef' return 6;
Ex: N = '123456aB' return 2;
If no acceptable substrings are found, return false;
*/


function password(N) {
    let passwords = [];
    let between = [];
    let ilength = [];
    let isUpperCase = [null];
    let theEnd = N.length - 1;
    for(let i = 0; i < N.length; i++){
        if(N[i] === 'a' || N[i] === 'b' || N[i] === 'c' || N[i] === 'd' || N[i] === 'e' || N[i] === 'f' ||
            N[i] === 'g' || N[i] ==='h' || N[i] === 'i' || N[i] === 'j' || N[i] === 'k' || N[i] === 'l' || N[i] === 'm'|| N[i] === 'n' || 
            N[i] === 'o' || N[i] === 'p' || N[i] === 'q' || N[i] === 'r' || N[i] === 's' || N[i] === 't' ||
            N[i] === 'u' || N[i] === 'v' || N[i] === 'w' || N[i] === 'x' || N[i] === 'y' || N[i] === 'z' ||
        
            N[i] === 'A' || N[i] === 'B' || N[i] === 'C'|| N[i] === 'D' || N[i] === 'E' || N[i] === 'F' ||
            N[i] === 'G' || N[i] === 'H' || N[i] === 'I' || N[i] === 'J' || N[i] === 'K' || N[i] === 'L' || N[i] === 'M' || N[i] === 'N' || 
            N[i] === 'O' || N[i] === 'P' || N[i] === 'Q' || N[i] === 'R' || N[i] === 'S' || N[i] === 'T' ||
            N[i] === 'U' || N[i] === 'V' || N[i] === 'W' || N[i] === 'X' || N[i] === 'Y' || N[i] === 'Z'
        ) {
            passwords.push(N[i]); 
        } else {
            passwords.push(undefined)
        }      
    }
    for(let j = 0; j < passwords.length; j++){
        if(passwords[j] != undefined && passwords[j -1] === undefined){ 
            if(between.length > 0) {
                //TEST TO UPPERCASE
                    for(let w = 0; w < between.length; w++){
                        if(between.includes(between[w].toUpperCase())) {
                            isUpperCase.push(between);
                        }
                    }
                //END TEST TO UPPERCASE
                //for(let w = 0; w < between.length; w++){
                   // if(between.includes(between[w].toUpperCase())){
                        ilength.push(between.length)
                        between = [];
                        between.push(passwords[j])
                        for(let q = j; q < passwords.length; q++) {
                            if(passwords[q] != undefined && passwords[q-1] != undefined){
                            between.push(passwords[q])
                            } else if(passwords[q] === undefined){
                                break
                            }
                        }
                    // } else {
                    //     between = [];
                    //     between.push(passwords[j])
                    //     for(let q = j; q < passwords.length; q++) {
                    //         if(passwords[q] != undefined && passwords[q-1] != undefined){
                    //         between.push(passwords[q])
                    //         } else if(passwords[q] === undefined){
                    //             break
                    //         }
                    //     }  
                    // }
               //}
                //^w for loop ending
            } else {
                between.push(passwords[j])
                for(let r = j; r < passwords.length; r++) {
                    if(passwords[r] != undefined && passwords[r-1] != undefined){
                    between.push(passwords[r])
                    } else if(passwords[r] === undefined){
                        break
                    }
                }   
            }
        }
        //THIS IS THE END
        if(j === theEnd) {
            console.log("Is this the end")
            if(between.length > 0) {
                console.log("Is there length")
            for(let b = 0; b < between.length; b++){
                if(between.includes(between[b].toUpperCase())) {
                    console.log("Are their capitals")
                    ilength.push(between.length)
                    between = [];
                }
            }
        }
        }
        //^This is the end of the end
    }
    console.log(ilength)
}
password('123asCa123FG123Abcd123asfF');
