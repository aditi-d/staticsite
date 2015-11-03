{
	function init() {
		var h1tags = document.getElementsByTagName("h1");
		h1tags[0].onclick = changeColor; 
	}

	function changeColor() {
		this.innerHTML = "You clicked it!";
		var smclr = "#" + Math.floor(Math.random()*1677825).toString(16);
		this.style.color = smclr;
	}
	onload = init;
}