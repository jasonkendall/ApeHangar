$(document).ready(function() {
	//hiding the main navigation
	$('#mainnav').show();
	
	//clicking the toggle button "toggles" #mainnav slowly
	$('.toggle').click(function() {
		$('#mainnav').toggle('slow');
	});
	//Hide the ul's
	$('#mainnav div').hide();
		
	//on click, open the corresponding div to reveal the sublinks
	$('h3.mopeds').click(function() {
		$('#mopeds').toggle('slow');
	});
	//on click, open the corresponding div to reveal the sublinks
	$('h3.atv').click(function() {
		$('#atv').toggle('slow');
	});
	//on click, open the corresponding div to reveal the sublinks
	$('h3.dirtbike').click(function() {
		$('#dirtbike').toggle('slow');
	});
	//on click, open the corresponding div to reveal the sublinks
	$('h3.trike').click(function() {
		$('#trike').toggle('slow');
	});
	//on click, open the corresponding div to reveal the sublinks
	$('h3.gokart').click(function() {
		$('#gokart').toggle('slow');
	});
});
	
	// pdf icons
	$(document).ready(function() {
		$('a[href$=".pdf"]').addClass('pdf');
	});
