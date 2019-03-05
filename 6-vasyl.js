function tickets(peopleInLine){
    let amount25 = 0;
    let amount50 = 0;
    let amount100 = 0;
  
    for(let i = 0; i < peopleInLine.length; i++){
  
      if(peopleInLine[i] === 100){
        if(amount25 >= 3){
          amount25 - 3;
          amount100++;
        }else if(amount25 >= 1 && amount50 >= 1){
         amount25 - 1;
         amount50 - 1;
         amount100++;
        }else{
            console.log('no')
          return "NO";
        }
      }
  
      if(peopleInLine[i] === 50){
        if(amount25 >= 1){
          amount25--;
          amount50++;
        } else {
            console.log('no')
         return "NO";
        }
      }
  
      if(peopleInLine[i] === 25){
        amount25++;
      }
    }
    console.log('yes')
    return "YES";
  }

  tickets([100, 25])