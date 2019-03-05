
function club(list) {
    let answer = [];
for(let i = 0; i < list.length; i++) {
    if(list[i][0] >= 55 && list[i][1] >= 7) {
        answer.push('Senior')
    } else {
        answer.push('Open')
    }
}
    return answer;
}

club([[20, 30], [40, 59], [2, 57], [56, 8]]);

// function openOrSenior(data){
//     let results = [];
//     for (let i = 0; i < data.length; i++) {
//       if (data[i][0] >= 55 && data[i][1] > 7) {
//         results.push('Senior');
//       } else {
//         results.push('Open');
//       }
//     }
//     console.log(results)
//     return results;
//   }
  
 // openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);
  //Expected Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]

  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

  function openOrSenior(data){
    function determineMembership(member){
      return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
  }

  function openOrSenior(data){
    return data.map(function(d){
      return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
  }

  
  function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
      if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
      } else {
        result.push('Open');
      }
    })
    return result;
  }

  function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
  }
  

