var textbox = document.getElementById("textbox");

var row_text = document.getElementById("row-text");

function update(){
	let row_text_inner = "";
	
	first_line = Math.round(textbox.scrollTop/15)
	
	for(i=1;i<=19 && i<=Math.round(textbox.offsetHeight/15);i++){
		row_text_inner+=first_line+i+"\n";
	}
	
	row_text.innerHTML=row_text_inner;
}

setInterval(update, 1);