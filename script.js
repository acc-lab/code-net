var textbox = document.getElementById("textbox");

var row_text = document.getElementById("row-text");

function update(){
	row_text_inner = "";
	
	first_line = Math.round(textbox.scrollTop/15)
	
	for(i=1;i<=19;i++){
		row_text_inner+=first_line+i+"\n";
	}
	
	row_text.innerHTML=row_text_inner;
}

setInterval(update, 1);