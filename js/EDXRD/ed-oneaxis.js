function electronDensityOneCoord(mainArray, arrayOneCoord, axisIndex) {
	
	var ED = 0;
    var maxValue = 0; // Максимальная координата
    var layerLength = 0; // Длинна слоя
    var EDCoordX = [];
    var EDCoordY = [];
    var EDCoordYtemp = [];

    var layerLength = Math.max.apply(null, arrayOneCoord);

	var arrayOneCoordLength = arrayOneCoord.length - 1;
    for (var i = 0; i <= layerLength; i = i + 0.01) {
        for (var j = 0; j <= arrayOneCoordLength; j++) {
            ED = ED + mainArray[j][4] * Math.exp(-((Math.pow((i - arrayOneCoord[j]), 2)) / (2 * Math.pow(mainArray[j][5], 2))));
        }
		EDCoordX.push(i);
		EDCoordYtemp.push(ED);
		ED = 0;
    }

    maxValue = Math.max.apply(null, EDCoordYtemp);
	
	EDCoordYLength = EDCoordYtemp.length;
	
    for (var i = 0; i <= EDCoordYLength - 1; i++) {
        EDCoordY.push(EDCoordYtemp[i] / maxValue)
    }

    var aXEDoXY = { aEDoX: EDCoordX, aEDoY: EDCoordY };

    return aXEDoXY;
}