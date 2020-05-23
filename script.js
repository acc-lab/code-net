var textbox = document.getElementById("textbox");

var row_text = document.getElementById("row-text");

var innerText;

function update(){
	let row_text_inner = "";
	
	let first_line = Math.round(textbox.scrollTop/15)
	
	innerText=textbox.innerHTML.split("<div>").join("\n").split("</div>").join("").split("<br>").join("");
	
	if(innerText.match("\n")==0){
		innerText=innerText.slice(1);
	}
	
	let totalRow = innerText.split("\n").length;
	
	for(i=1;i<=19 && i+first_line<=totalRow;i++){
		row_text_inner+=first_line+i+"\n";
	}
	
	row_text.innerHTML=row_text_inner;
}

setInterval(update, 1);