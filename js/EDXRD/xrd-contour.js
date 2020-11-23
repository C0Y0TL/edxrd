function xrdContour(xArray, yArray) {

	var intensity = 0;
	var intensity1 = 0;
	var intensity2 = 0;
	var axisZ = [];
	var axisZtemp = [];
	var axisZnormal = [];
	var axisZSub = [];
	
	var maxXRDArray = [];
	var maxXRDArray = [];
	 
	var xArrayLength = xArray.length - 1;
	for (var i = 0; i <= 1; i = i + 0.001) {
		for (var j = 0; j <= 1; j = j + 0.001) {
			for (var k = 0; k <= xArrayLength; k++) {
				intensity1 += Math.cos(2 * Math.PI * (i * xArray[k] + j * yArray[k]));
				intensity2 += Math.sin(2 * Math.PI * (i * xArray[k] + j * yArray[k]));
			}
			intensity = Math.pow(intensity1, 2) + Math.pow(intensity2, 2);
			axisZtemp.push(intensity);
			intensity = 0;
			intensity1 = 0;
			intensity2 = 0;
		}
		axisZ.push(axisZtemp);
		axisZtemp = [];

	}

	var axisZLength = axisZ.length;
    for (var i = 0; i <= axisZLength; i++) {
        maxXRDArray.push(Math.max.apply(null, axisZ[i]));
    }

    var maxXRD = Math.max.apply(null, maxXRDArray);
	var axisZILength = axisZ[0].length - 1;
    for (var i = 0; i <= axisZLength - 1; i++) {
        for (var j = 0; j <= axisZILength; j++) {
            axisZSub.push(axisZ[i][j] / maxXRD);
        }
        axisZnormal.push(axisZSub);
		axisZSub = [];
    }

    var cXRDoXY = { cXRDoXY: axisZnormal };
    return cXRDoXY;
}