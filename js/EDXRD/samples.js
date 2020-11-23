function successData(data) {
	text = data;
	checkboxesControl('axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', true);
	calc();
}

function funcBefore() {
	$('.sampleLink').attr('disabled', true);
	elemetsControl('browseButtons,calcButton,axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', true);
}

$(document).ready(function() {
    $('.sampleLink').click(function(){
    	var attrSample = jQuery(this).attr("name");
        $.ajax({
        	type: 'POST',
            url: 'samples/' + attrSample + '.php',
            dataType: 'html',
            beforeSend: funcBefore,
            success: successData
        });
    });
});