// Notification JavaScripts

(function ($) {
	'use strict';

	$.validator.messages.required = 'Este campo es obligatorio';
	$.validator.messages.email = 'Debe ingresar un mail valido.';

	$('.swal-success').on('click', function () {


	});

	$('.swal-cancel').on('click', function () {
		window.location.href = "index.html";
	});

	$.validator.setDefaults({
		submitHandler: function () {
			swal("Felicitaciones!", "Has sido registrado!", "success")
		}
	});


	$("#form-validation").validate();




})(jQuery);