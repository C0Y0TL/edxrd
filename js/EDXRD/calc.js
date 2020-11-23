importScripts('add-anar.js', 'one-coord.js', 'ed-oneaxis.js', 'ed-surface.js', 'ed-contour.js', 'xrd-oneaxis.js', 'xrd-surface.js', 'xrd-contour.js');

onmessage = function(event) {

   var result = mainCalc(event.data.cCL, event.data.textHIN, event.data.aXED, event.data.aYED, event.data.aZED, event.data.cED, event.data.sED, event.data.aXXRD, event.data.cXRD, event.data.sXRD);

   postMessage( {mType: 'RESULT', rObject: result} )
};

function mainCalc(cCL, textHIN, aXED, aYED, aZED, cED, sED, aXXRD, cXRD, sXRD) {
	
	var startPosition = 0;
	var endPosition = 0;
	var currentPosition = 0;
	var atomsArray = [];
	var cCLValue = parseInt(arguments[0]) + 1;
	var cCLIterator = Math.round(100 / cCLValue);
	var progress = 0;

	// Отбор основных данных
    while (true) {
        startPosition = textHIN.indexOf("atom ", currentPosition);

		// indexOf возвращает -1 если подстрока не найдена
        if (startPosition == -1) {
            break;
        }

        currentPosition = startPosition + 1;

        endPosition = textHIN.indexOf("\n", currentPosition);

        atomsArray.push(textHIN.substring(startPosition, endPosition - 1));
    }

    // Парсинг основных данных
    var mainArray = [];
    var tempArray = [];
    var atomsArrayLength = atomsArray.length - 1;

    for (var i = 0; i <= atomsArrayLength; i++) {
        tempArray = [];
        tempArray = atomsArray[i].split(" ", 10);

        tempArray.splice(0, 3);
        tempArray.splice(1, 3);

        mainArray.push(tempArray);
    }

	addANAR(mainArray);

	progress = progress + cCLIterator;
	postMessage( {mType: 'PROGRESS', rObject: progress} );	

	var xArray = createOneCoordArray(mainArray, 1);
	var yArray = createOneCoordArray(mainArray, 2);
	var zArray = createOneCoordArray(mainArray, 3);

	if (arguments[2] == true) {
		var aXEDoXY = electronDensityOneCoord(mainArray, xArray, 1);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );	
	} else {
		var aXEDoXY = 0;
	}

	if (arguments[3] == true) {
		var aYEDoXY = electronDensityOneCoord(mainArray, yArray, 2);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var aYEDoXY = 0;
	}

	if (arguments[4] == true) {
		var aZEDoXY = electronDensityOneCoord(mainArray, zArray, 3);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var aZEDoXY = 0;
	}
	
	if (arguments[5] == true) {
		var cEDoXY = electronDensityContour(mainArray, zArray, xArray);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var cEDoXY = 0;
	}

	if (arguments[6] == true) {
		var sEDoXY = electronDensitySurface(mainArray, zArray, xArray);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var sEDoXY = 0;
	}
	
	if (arguments[7] == true) {
		var aXXRDoXY = xrdOne(xArray);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var aXXRDoXY = 0;
	}

	if (arguments[8] == true) {
		var cXRDoXY = xrdContour(yArray, xArray);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var cXRDoXY = 0;
	}

	if (arguments[9] == true) {
		var sXRDoXY = xrdSurfece(xArray, yArray);
		progress = progress + cCLIterator;
		postMessage( {mType: 'PROGRESS', rObject: progress} );
	} else {
		var sXRDoXY = 0;
	}
	

	return { 
		aXEDo: aXEDoXY, 
		aYEDo: aYEDoXY, 
		aZEDo: aZEDoXY, 
		cEDo: cEDoXY,
		sEDo: sEDoXY,
		aXXRDo: aXXRDoXY,
		cXRDo: cXRDoXY,
		sXRDo: sXRDoXY
	};

}