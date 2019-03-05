let arrays = 'Abcdefj';
for(let i = 0; i < arrays.length; i++){
    if(arrays[i] === arrays[i].toUpperCase()){ 
        console.log(arrays[i])
}
}

let rings = 'AbCd';
for(let k = 0; k < rings.length; k++){
    if(rings.includes(rings[k].toUpperCase())){
        console.log(rings[k])
    }
}

let stuff = ['A', 'b', 'c', 'd']
if(stuff.includes(stuff.toUpperCase())){
    console.log(stuff)
}

