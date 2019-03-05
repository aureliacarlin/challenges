function counting(N){

    for(let i = 1; i < N; i++) {
        if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            console.log('CodilityTestCoders')
        } else if(i%3 === 0 && i % 5=== 0){
            console.log('TestCOders')
        } 
        else if(i%2 === 0 && i%5 === 0){
            console.log('CodilityCOders')
        }
        else if(i%2 === 0 && i%3 === 0){
            console.log('CodilityTest')
        } else if (i%5 === 0) {
            console.log('Coders')
        } else if(i%3 === 0) {
            console.log('Test')
        } else if(i%2 === 0){
            console.log('Codility')
        } else{
            console.log(i)
        }

    }

}


counting(50)