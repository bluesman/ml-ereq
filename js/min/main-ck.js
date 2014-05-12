$(document).ready(function(){$(function(){$("#datepicker").datepicker({showOn:"both",buttonImage:"",buttonImageOnly:!1})}),$(function(){$("#from").datepicker({defaultDate:"+1w",changeMonth:!0,numberOfMonths:2,onClose:function(e){$("#to").datepicker("option","minDate",e)}}),$("#to").datepicker({defaultDate:"+1w",changeMonth:!0,numberOfMonths:2,onClose:function(e){$("#from").datepicker("option","maxDate",e)}})}),$(".search-popover-link").popover({trigger:"hover",title:"Patient's Orders",content:"Search orders for this patient.",placement:"top"}),$("#orders-page-list").is(":visible")&&$("#orders-list-control").toggleClass("active"),$("#orders-page-table").is(":visible")&&$("#orders-table-control").toggleClass("active"),$("#orders-list-control").click(function(){$("#orders-list-control").addClass("active"),$("#orders-table-control").removeClass("active"),$("#orders-page-table").addClass("hidden"),$("#orders-page-list").removeClass("hidden")}),$("#orders-table-control").click(function(){$("#orders-table-control").addClass("active"),$("#orders-list-control").removeClass("active"),$("#orders-page-list").addClass("hidden"),$("#orders-page-table").removeClass("hidden")});for(var e=11;e>=0;e--){var t="#ins-providers-"+e,s="#medications-"+e;"undefined"!=typeof $(t)&&$(t).popover({trigger:"hover",title:"Insurance Providers",html:!0,content:'<ul class="popover-list"><li>Provider 1</li><li>Providers 2</li></ul><div><a href="/step1" class="btn btn-success pull-right">Edit</a></div>',placement:"top"}),$(s).popover({trigger:"hover",html:!0,title:"Prescribed Medications",content:'<ul class="popover-list"><li>Medication 1</li><li>Medication 2</li><li>Medication 3</li></ul><div><a href="/step1" class="btn btn-success pull-right">Edit</a></div>',placement:"top"})}$("#patients-page-list").is(":visible")&&$("#patients-list-control").toggleClass("active"),$("#patients-page-cards").is(":visible")&&$("#patients-cards-control").toggleClass("active"),$("#patients-list-control").click(function(){$("#patients-list-control").addClass("active"),$("#patients-cards-control").removeClass("active"),$("#patients-page-cards").addClass("hidden"),$("#patients-page-list").removeClass("hidden")}),$("#patients-cards-control").click(function(){$("#patients-cards-control").addClass("active"),$("#patients-list-control").removeClass("active"),$("#patients-page-list").addClass("hidden"),$("#patients-page-cards").removeClass("hidden")}),$(".patients-page-body-container").find("a").click(function(e){e.preventDefault(),$("#practiceLocationModal").modal("show")})}),$("input[type=radio][name=isWorkersComp]").change(function(){"yes"===this.value?($("#workers-comp-questions").hide(),$("#workers-comp-questions").removeClass("hide"),$("#workers-comp-questions").slideDown()):$("#workers-comp-questions").slideUp()}),$("input[type=radio][name=subscriberRelationship]").change(function(){"other"===this.value?($("#other-subscriber-questions").hide(),$("#other-subscriber-questions").removeClass("hide"),$("#other-subscriber-questions").slideDown()):$("#other-subscriber-questions").slideUp()}),$(function(){$("#datepicker").datepicker()});