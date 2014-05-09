$(document).ready(function(){
	/* orders.html javascript */
	$(function() {
        $("#datepicker").datepicker({
            showOn: "both",
            buttonImage: "",
            buttonImageOnly: false,
        });
    });

	$(function() {
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

	if ($('#orders-page-list').is(":visible")) {
		$('#orders-list-control').toggleClass('active');
	}
	if ($('#orders-page-table').is(":visible")) {
		$('#orders-table-control').toggleClass('active');
	}

	$('#orders-list-control').click(function() {
		$('#orders-list-control').addClass('active');
		$('#orders-table-control').removeClass('active');
		$('#orders-page-table').addClass('hidden');
		$('#orders-page-list').removeClass('hidden');
	});

	$('#orders-table-control').click(function() {
		$('#orders-table-control').addClass('active');
		$('#orders-list-control').removeClass('active');
		$('#orders-page-list').addClass('hidden');
		$('#orders-page-table').removeClass('hidden');
	});

	/*
	 *
	 * patients.html javascript
	 *
	 */

	/* patient card popovers */
	for (var i = 11; i >= 0; i--) {
		var key1 = '#ins-providers-'+i;
		var key2 = '#medications-'+i;
		if (typeof $(key1) !== "undefined") {
			$(key1).popover({
				trigger:'hover',
				title:'Insurance Providers',
				html:true,
				content:'<ul class="popover-list"><li>Provider 1</li><li>Providers 2</li></ul><div><a href="/step1" class="btn btn-success pull-right">Edit</a></div>',
				placement:'top',
			});
		}

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

	/* display the practiceLocationModal when they click edit */
	$(".patients-page-body-container").find("a").click(function(e) {
		e.preventDefault();
		$('#practiceLocationModal').modal('show');
	});

});
