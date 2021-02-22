function letterCounter (input){
 const letterMap = new Map();
 const count = 0;
 const array = [];

  for (const key of input) {
   letterMap.set(key,count);
  }

  for (const key of input) {
    let count = letterMap.get(key);
    letterMap.set(key, count + 1);
  }

  for (const [key,value] of letterMap) {
    array.push([key, value])
  }
  
  console.log(array)
 }

letterCounter('aaaabbbbbcca');
letterCounter('abbbccddddeeff');
