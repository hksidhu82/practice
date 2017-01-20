function(nums, target) {
    return nums.reduce(function(numAndIndexes, num, index){
        var compliment = target - num;
        
        var match = numAndIndexes.filter(function(numAndIndex){
            return numAndIndex.number === compliment;
        }); 
        console.log("match " + match.length);
        var output = [];
        if (match.length) {
            console.log("here");
            output.push(match[0].index);
            output.push(index);
            return output;
        } else  {
            numAndIndexes.push(getNumAndIndexMap(num, index));
            return numAndIndexes;
        }
    },[]);
};

function getNumAndIndexMap(num, index){
       var numAndIndex = {};
       numAndIndex.number = num;
       numAndIndex.index = index;
       
       return numAndIndex;
}

var nums = [2, 7, 11, 15];
var target = 9;

console.log(twoSums(nums, target));