var repeatedCharacterCount = function (string, repeatedChar) {
	var words = new String(string);
 	return words.split("").reduce((count, e) => { 
			if(e === String(repeatedChar)) {
				++count;
			}
			return count;
		}, 0);
}

var countZeroes = function (num){
  var output = 0;
  for (var i=1; i<=num; i++) {
    output += repeatedCharacterCount(i, 0);
  }
  
  return output;
}

countZeroes(30);