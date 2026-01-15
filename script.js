function firstNonRepeatedChar(str) {
	let obj ={};

    for(let char of str){
      if(!obj[char]) obj[char] = 0;
      obj[char]++;
    }

	for(let num in obj){
      if(obj[num] === 1){
        return num;
      }
    }
	
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
