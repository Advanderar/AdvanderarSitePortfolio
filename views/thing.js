

//parallax BS
function nextFrame(){
	if(header.title.scaleX >= 0.7 && header.title.scaleX <= 1){
		
		header.title.scaleX = field.y/1000 + 1
		header.title.scaleY = field.y/1000 + 1
		if(header.title.scaleX > 1){
			header.title.scaleX = 1
			header.title.scaleY = 1
		}
		else if(header.title.scaleX < .7){
			header.title.scaleX = .7
			header.title.scaleY = .7
		} else{
			header.y = (field.y/2 - 800)
			header.title.y = (field.y/4 - 950)*-1
		}
		
	}
	
}
