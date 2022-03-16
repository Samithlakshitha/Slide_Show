var i = 0; 
var timelap = 4000;			
var images = ["pic1.jpg","pic2.jpg","pic3.jpg"];	
	
	 
function changeImg(){
	document.slide.src = images[i];


	if(i < images.length - 1){
	  
	  i++; 
	} else { 
		
		i = 0;
	}

	setTimeout("changeImg()", timelap);
}

// loading function
window.onload=changeImg;
