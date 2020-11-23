function electronDensitySurface(mainArray, arrayOneCoord1, arrayOneCoord2) {

	var ED = 0;
	var maxED = 0;
	var maxEDArray = [];
	var eDensitySurface = [];
	var eDensitySurfaceTemp = [];
	var eDtempSub = [];
	var eDensitySurfaceY = [];
	
	var layerLength1 = Math.max.apply(null, arrayOneCoord1);
	var layerLength2 = Math.max.apply(null, arrayOneCoord2);

	var arrayOneCoord2Length = arrayOneCoord2.length - 1;

    for (var i = 0; i <= layerLength1; i++) {
        for (var j = 0; j <= layerLength2; j++) {
            for (var k = 0; k <= arrayOneCoord2Length; k++) {
                ED = ED + mainArray[k][4] * Math.exp(-((Math.pow((i - arrayOneCoord1[k]), 2)) / (2 * Math.pow(mainArray[k][5], 2)))) + mainArray[k][4] * Math.exp(-((Math.pow((j - arrayOneCoord2[k]), 2)) / (2 * Math.pow(mainArray[k][5], 2))));
            }
            eDensitySurfaceY.push(ED);
            ED = 0;
        }
        eDensitySurfaceTemp.push(eDensitySurfaceY);
        eDensitySurfaceY = [];
    }

	var eDensitySurfaceTempLength = eDensitySurfaceTemp.length;
	
    for (var i = 0; i <= eDensitySurfaceTempLength; i++) {
        maxEDArray.push(Math.max.apply(null, eDensitySurfaceTemp[i]));
    }

    maxED = Math.max.apply(null, maxEDArray);

	var eDensitySurfaceTempILength = eDensitySurfaceTemp[0].length - 1;
    for (var i = 0; i <= eDensitySurfaceTempLength - 1; i++) {
        for (var j = 0; j <= eDensitySurfaceTempILength; j++) {
            eDtempSub.push(eDensitySurfaceTemp[i][j] / maxED);
        }
        eDensitySurface.push(eDtempSub);
		eDtempSub = [];
    }

    var sEDoXY = { sEDoXY: eDensitySurface };
    return sEDoXY;
}