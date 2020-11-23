/* Включение и отключение элементов управления
elementsID принимает строку следующего вида "ID1,ID2,ID3,ID4,..." */
function elemetsControl (elemetsID, boolean) {
	var idArray = elemetsID.split(',');
	var idArrayLength = idArray.length;
	for (var i = 0; i < idArrayLength; i++) {
		document.getElementById(idArray[i]).disabled = boolean;
	}
}

/* Поставить или убрать флаг у чекбокса
checkboxesID принимает строку следующего вида "ID1,ID2,ID3,ID4,..." */
function checkboxesControl (checkboxesID, boolean) {
	var idArray = checkboxesID.split(',');
	var idArrayLength = idArray.length;
	for (var i = 0; i < idArrayLength; i++) {
		document.getElementById(idArray[i]).checked = boolean;
	}
}

/* СКрыть или показать тег
sh принимает два значения 'show' или 'hide'
elemetsID принимает строку следующего вида "ID1,ID2,ID3,ID4,..." */
function visibleControl(sh, elemetsID) {
	var idArray = elemetsID.split(',');
	var idArrayLength = idArray.length;
	if (sh == 'show') {
		for (var i = 0; i < idArrayLength; i++) {
			document.getElementById(idArray[i]).style.display = '';
		}
	}
	if (sh == 'hide') {
		for (var i = 0; i < idArrayLength; i++) {
			document.getElementById(idArray[i]).style.display = 'none';
		}	
	}
};

/* Условие для активации кнопки "Готово"
Должен быть выбран хотя бы один чекбокс */
var checkboxes = $("input[type='checkbox']"), calcButton = $("#calcButton");

checkboxes.click(function() {
    calcButton.attr("disabled", !checkboxes.is(":checked"));
});

/* Добавление блока для отрисовки графика */
function addPlotBox(plotName, plotID) {
		$('#plotly-content').append('<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="overflow: auto"><h5 class="text-center font-weight-bold mt-2">' + plotName + '</h5><div style="overflow: auto"><div id="' + plotID + '" style="width:800px; height:600px; margin: auto;"></div></div></div>');
}

/* Увеличение изображения */
$(function() {
	$('.card-img-top').on('click', function() {
		$('.full-size-image').attr('src', $(this).attr('src'));
		$('#image-zoom').modal('show');
	});
});