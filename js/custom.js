$(document).ready(function(){
	$('#myTab li button').click(function(){
		$('.tab-pane').hide();
		$('.tab-pane').removeClass('active show');
		var targerClass = $(this).attr('data-bs-target');
		console.log(targerClass);
		$(targerClass).fadeIn().addClass('active show');
	});
});