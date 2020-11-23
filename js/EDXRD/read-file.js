// Чтение файла

var text = ''; // HIN файла

function processFiles(files) {
    $('#fileTypeWarning').remove();

    var file = files[0];

    if (((file.name).substring((file.name).length - 3,(file.name).length)).toLowerCase() == 'hin') {
        var reader = new FileReader();

        $("#browseButtonTitle").text(file.name);
        reader.onload = function (e) {
            var output = document.getElementById("fileOutput");
            output.textContent = e.target.result;
            text=output.textContent;

            elemetsControl('axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', false);
        };
        reader.readAsText(file);
    } else {
        text = '';
        $("#browseButtonTitle").text("Обзор...");
        elemetsControl('calcButton,axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD',true);
        checkboxesControl('axisXED,axisYED,axisZED,contourED,surfaceED,axisXXRD,contourXRD,surfaceXRD', false);
        $('#browseBox').append('<div id="fileTypeWarning" class="alert alert-warning" role="alert">Недопустимый формат файла!</div>');
    }

}