var axisXED = false;
var axisYED = false;
var axisZED = false;
var contourED = false;
var surfaceED = false;

var axisXXRD = false;
var contourXRD = false;
var surfaceXRD = false;
var checkboxCheckedLength = 0;

function calc() {
	checkboxCheckedLength = $(':checkbox:checked').length;
	$('.progress-bar').css('width', '0%');
	$("#plotly-content").empty();
	$("#calcButton").text("ИДЁТ ВЫЧИСЛЕНИЕ");
	visibleControl('hide', 'plotly-content');
	visibleControl('show', 'calc-progress-box');
	elemetsControl('browseButtons,calcButton,axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', true);

	if($('#axisXED').prop('checked')) {
		axisXED = true;
		addPlotBox("Электронная плотность. Одномерная. Ось X", "axisXEDp");
	} else {
		axisXED = false;
	}

	if($('#axisYED').prop('checked')) {
		axisYED = true;
		addPlotBox("Электронная плотность. Одномерная. Ось Y", "axisYEDp");
	} else {
		axisYED = false;
	}

	if($('#axisZED').prop('checked')) {
		axisZED = true;
		addPlotBox("Электронная плотность. Одномерная. Ось Z", "axisZEDp");
	} else {
		axisZED = false;
	}

	if($('#contourED').prop('checked')) {
		contourED = true;
		addPlotBox("Электронная плотность. Двумерная. Контурный график", "contourEDp");
	} else {
		contourED = false;
	}

	if($('#surfaceED').prop('checked')) {
		surfaceED = true;
		addPlotBox("Электронная плотность. Трёхмерная. Трёхмерная поверхность", "surfaceEDp");
	} else {
		surfaceED = false;
	}

	if($('#axisXXRD').prop('checked')) {
		axisXXRD = true;
		addPlotBox("Рентгеновская дифракция. Одномерная. Ось X", "axisXXRDp");
	} else {
		axisXXRD = false;
	}

	if($('#contourXRD').prop('checked')) {
		contourXRD = true;
		addPlotBox("Рентгеновская дифракция. ДвумернаяТрёхмерная", "contourXRDp");
	} else {
		contourXRD = false;
	}

	if($('#surfaceXRD').prop('checked')) {
		surfaceXRD = true;
		addPlotBox("Рентгеновская дифракция. Трёхмерная поверхность", "surfaceXRDp");
	} else {
		surfaceXRD = false;
	}

	calcWorker = new Worker ("js/EDXRD/calc.js");

	calcWorker.onmessage = receivedCalcWorkerMessage;

	calcWorker.postMessage({cCL: checkboxCheckedLength, textHIN: text, aXED: axisXED, aYED: axisYED, aZED: axisZED, cED: contourED, sED: surfaceED, aXXRD: axisXXRD, cXRD: contourXRD, sXRD: surfaceXRD });
}

function receivedCalcWorkerMessage(event) {
	if (event.data.mType == 'RESULT') {
	var resultWorker = event.data.rObject;

		var raXED = resultWorker.aXEDo;

			var raXEDcX = raXED.aEDoX;
			var raXEDcY = raXED.aEDoY;

		var raYED = resultWorker.aYEDo;

			var raYEDcX = raYED.aEDoX;
			var raYEDcY = raYED.aEDoY;

		var raZED = resultWorker.aZEDo;

			var raZEDcX = raZED.aEDoX;
			var raZEDcY = raZED.aEDoY;

		var rcED = resultWorker.cEDo;

			var rcEDcXY = rcED.cEDoXY;

		var rsED = resultWorker.sEDo;

			var rsEDcXY = rsED.sEDoXY;

		var raXED = resultWorker.aXXRDo;

			var raXXRDcX = raXED.aXXRDoX;
			var raXXRDcY = raXED.aXXRDoY;

		var rcXRD = resultWorker.cXRDo;

			var rcXRDcXY = rcXRD.cXRDoXY;

		var rsXRD = resultWorker.sXRDo;

			var rsXRDcXY = rsXRD.sXRDoXY;

	var layoutED = {
	xaxis: {
	title: 'R, \u212B',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	},
	yaxis: {
	title: '\u03C1, отн. ед.',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	}
	};

	var layoutEDC = {
	xaxis: {
	title: 'R(X), \u212B',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	},
	yaxis: {
	title: 'R(Z), \u212B',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	}
	};


	var layoutXRDC = {
	xaxis: {
	title: 'sin(\u03B8) / \u03BB, \u212B\u207B\u00B9',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	},
	yaxis: {
	title: 'sin(\u03B8) / \u03BB, \u212B\u207B\u00B9',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	}
	};

	var layoutSED = {
		scene: {
		xaxis:{title: 'R(X), \u212B'},
		yaxis:{title: 'R(Z), \u212B'},
		zaxis:{title: '\u03C1, отн. ед.'}
		}
	};

	var layoutXRD = {
	xaxis: {
	title: 'sin(\u03B8) / \u03BB, \u212B\u207B\u00B9',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	},
	yaxis: {
	title: 'I, отн. ед.',
	titlefont: {
		family: 'Courier New, monospace',
		size: 18,
		color: '#7f7f7f'
	}
	}
	};

	var layoutSXRD = {
		scene: {
		xaxis:{title: 'sin(\u03B8) / \u03BB, \u212B\u207B\u00B9'},
		yaxis:{title: 'sin(\u03B8) / \u03BB, \u212B\u207B\u00B9'},
		zaxis:{title: 'I, отн. ед.'}
		}
	};

	if(axisXED == true) {
		var PLOTDIVEDX = document.getElementById('axisXEDp');

	    Plotly.plot(PLOTDIVEDX, [{
	        x: raXEDcX,
	        y: raXEDcY }], layoutED );
	}

	if(axisYED == true) {
		var PLOTDIVEDY = document.getElementById('axisYEDp');

	    Plotly.plot( PLOTDIVEDY, [{
	        x: raYEDcX,
	        y: raYEDcY }], layoutED );
	}

	if(axisZED == true) {
		var PLOTDIVEDZ = document.getElementById('axisZEDp');

    	Plotly.plot( PLOTDIVEDZ, [{
        	x: raZEDcX,
        	y: raZEDcY }], layoutED );
	}

	if(contourED == true) {
    	var PLOTDIVEDC = {z: rcEDcXY, type: 'contour', colorscale: 'RdBu', colorbar:{
	    title: '\u03C1, отн. ед.',
	    titleside: 'right',
	    titlefont: {
	    	size: 18,
	    	family: 'Courier New, monospace'
	    }
	},contours: {
		start: 0,
		end: 1,
		size: 0.01
	}};

    	Plotly.newPlot('contourEDp', [PLOTDIVEDC], layoutEDC);
	}

	if(surfaceED == true) {
    	var PLOTDIVEDS = {z: rsEDcXY, type: 'surface'};

    	Plotly.newPlot('surfaceEDp', [PLOTDIVEDS], layoutSED);
	}

	if(axisXXRD == true) {
		var PLOTDIVXRDX = document.getElementById('axisXXRDp');

		Plotly.plot( PLOTDIVXRDX, [{
        	x: raXXRDcX,
        	y: raXXRDcY }], layoutXRD );
	}

	if(contourXRD == true) {
    	var PLOTDIVXRDC = {z: rcXRDcXY, type: 'contour', colorbar:{
	    title: 'I, отн. ед.',
	    titleside: 'right',
	    titlefont: {
	    	size: 18,
	    	family: 'Courier New, monospace'
	    }
	},
	contours: {
		start: 0,
		end: 1,
		size: 0.01
	}};

    	Plotly.newPlot('contourXRDp', [PLOTDIVXRDC], layoutXRDC);
	}

	if(surfaceXRD == true) {
    	var PLOTDIVXRDS = {z: rsXRDcXY, type: 'surface'};

    	Plotly.newPlot('surfaceXRDp', [PLOTDIVXRDS], layoutSXRD);
	}

	$("#calcButton").text("Готово");
	visibleControl('show', 'plotly-content');
	visibleControl('hide', 'calc-progress-box');
	elemetsControl('browseButtons,axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', false);
	elemetsControl('calcButton', true);
	checkboxesControl('axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', false);
	$('.sampleLink').removeAttr('disabled');

	calcWorker.terminate();
	calcWorker = null;
} else if (event.data.mType == 'PROGRESS') {
		var resultWorker = event.data.rObject;
		$('.progress-bar').css('width', resultWorker + '%');
}

}
