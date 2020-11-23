window.onload = function() {
	
	visibleControl('hide', 'plotly-content,calc-progress-box');
	elemetsControl('calcButton,axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', true);
	checkboxesControl('axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', false);
}