function letterCounter (input){
 const letterMap = new Map();
 const count = 0;
 const result = [];

  for (const key of input) {
   letterMap.set(key,count);
  }

  for (const key of input) {
    let count = letterMap.get(key);
    letterMap.set(key, count++);
  }

  for (const [key,value] of letterMap) {
    result.push([key, value])
  }
  
  console.log(result)
 }

letterCounter('aaaabbbbbcca');
letterCounter('abbbccddddeeff');
