function createOneCoordArray(mainArray, index) {
	
	var array = [];
	var mainArrayLength = mainArray.length - 1;
	
	for (var i = 0; i <= mainArrayLength; i++) {
        array.push(Number(mainArray[i][index]));
    }
	
	minValue = Math.min.apply(null, array);
	
	var arrayLength = array.length - 1;
    for (var i = 0; i <= arrayLength; i++) {
        array[i] = array[i] - minValue;
    }
	
	if (index == 1) {
		xArray = array;
		return xArray;
	} else if (index == 2) {
		yArray = array;
		return yArray;
	} else if (index == 3) {
		zArray = array;
		return zArray;
	}
}