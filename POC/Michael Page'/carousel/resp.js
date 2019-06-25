
//provide control over image slide show
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	items:4,
	//make website responsive
	responsive : {

    
    // breakpoint from 768 up
    0 : {
		items:1
    },
	
	480 : {
		items:2
	},
	
	768 : {
		items:3
	},
	992 : {
		
	items:4
	}
}
    
});