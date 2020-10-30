function chunkArrayInGroups(arr, size) {

    //assume the they are even for now
    let howManyGroupsAreThere = arr.length /size;
    // console.log(howManyGroupsAreThere);
    // 0 index friendly
    let zeroIndexFriendly = howManyGroupsAreThere -1;
    // console.log(zeroIndexFriendly);
    
    let newChunkyMonkeyArray = [];
    for(let i = howManyGroupsAreThere; i > 0; i--){
      // console.log(i);
      newChunkyMonkeyArray.push(arr.splice(0,size));
      // console.log(newChunkyMonkeyArray);
    }
      
      
      return newChunkyMonkeyArray;
    }
    
    // chunkArrayInGroups(["a", "b", "c","d","e","f"], 2);
    chunkArrayInGroups(["a", "b", "c","d"], 2);




module.exports = chunkArrayInGroups;

