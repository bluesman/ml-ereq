$(document).ready(function(){
	/* orders.html javascript */


	/*
	 *
	 * patients.html javascript
	 *
	 */

	/* patient card popovers */
	for (var i = 11; i >= 0; i--) {
		var key1 = '#ins-providers-'+i;
		var key2 = '#medications-'+i;

		$(key1).popover({
			trigger:'hover',
			title:'Insurance Providers',
			html:true,
			content:'<ul class="popover-list"><li>Provider 1</li><li>Providers 2</li></ul><div><a href="/step1" class="btn btn-success pull-right">Edit</a></div>',
			placement:'top',
		});

		$(key2).popover({
			trigger:'hover',
			html:true,
			title:'Prescribed Medications',
			content:'<ul class="popover-list"><li>Medication 1</li><li>Medication 2</li><li>Medication 3</li></ul><div><a href="/step1" class="btn btn-success pull-right">Edit</a></div>',
			placement:'top',
		});
	}

	if ($('#patients-page-list').is(":visible")) {
		$('#patients-list-control').toggleClass('active');
	}
	if ($('#patients-page-cards').is(":visible")) {
		$('#patients-cards-control').toggleClass('active');
	}

	$('#patients-list-control').click(function() {
		$('#patients-list-control').addClass('active');
		$('#patients-cards-control').removeClass('active');
		$('#patients-page-cards').addClass('hidden');
		$('#patients-page-list').removeClass('hidden');
	});

	$('#patients-cards-control').click(function() {
		$('#patients-cards-control').addClass('active');
		$('#patients-list-control').removeClass('active');
		$('#patients-page-list').addClass('hidden');
		$('#patients-page-cards').removeClass('hidden');
	});


});
