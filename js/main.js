$(document).ready(function(){
	/* orders.html javascript */


	/* patients.html javascript */
	for (var i = 11; i >= 0; i--) {
		var key1 = '#ins-providers-'+i;
		var key2 = '#medications-'+i;

		$(key1).popover({
			trigger:'click',
			title:'Insurance Providers',
			html:true,
			content:'<ul class="popover-list"><li>Provider 1</li><li>Providers 2</li></ul>',
			placement:'top',
		});

		$(key2).popover({
			trigger:'hover',
			html:true,
			title:'Prescribed Medications',
			content:'<ul class="popover-list"><li>Medication 1</li><li>Medication 2</li><li>Medication 3</li></ul>',
			placement:'top',
		});
	}

});
