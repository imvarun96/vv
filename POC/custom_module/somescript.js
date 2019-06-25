jQuery(document).ready(function(){
  jQuery(".delete").click(function(e){
	e.preventDefault();
	var $atag = jQuery(this);
    jQuery.ajax({
		url: jQuery(this).attr('href'), 
		success: function(result){
			alert(result);
			$atag.parent().parent().remove();
		}
	});
  });
});
