function xrdOne(xArray) {

	var intensity = 0;
	var intensity1 = 0;
	var intensity2 = 0;
	var axisX = [];
	var axisYtemp = []; // Без нормировки
	var axisY = [];
	var maxAxisY = 0;
	var xArrayLength  = xArray.length - 1;

	for (var i = 0; i <= 1; i = i + 0.001) {
		for (var j = 0; j <= xArrayLength; j++) {
			intensity1 += Math.cos(2 * Math.PI * i * xArray[j]);
			intensity2 += Math.sin(2 * Math.PI * i * xArray[j]);
		}
		intensity = Math.pow(intensity1, 2) + Math.pow(intensity2, 2);
		axisX.push(i);
		axisYtemp.push(intensity);
		intensity = 0;
		intensity1 = 0;
		intensity2 = 0;
	}

	var axisYtempLength = axisYtemp.length - 1;

	maxAxisY = Math.max.apply(null, axisYtemp);
	for (var i = 0; i <= axisYtempLength; i++) {
        axisY.push(axisYtemp[i] / maxAxisY)
    }

    var aXXRDoXY = { aXXRDoX: axisX, aXXRDoY: axisY };

    return aXXRDoXY;
}