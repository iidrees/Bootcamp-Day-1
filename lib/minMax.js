module.exports = function minMax(num){
  let min = minNum(num);
  let max = largeNum(num);
  if (min[0] === max[0]) {
  	return min;

  }
  return min.concat(max);
}

function minNum(num) {
  let minArr = [];
	let min = num[0];
	for (let count = 0; count<num.length; count++){
		if (num[count] < min ) {
			min = num[count];
		}
	}
	minArr.push(min);
	return minArr;
}



function largeNum(num) {
  let maxArr = [];
	let max = num[0];
	for (let count = 0; count<num.length; count++){
		if (num[count] > max ) {
			max = num[count];
		}
	}
	maxArr.push(max);
	return maxArr;
}


