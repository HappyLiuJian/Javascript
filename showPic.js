function showPic(whichpic) {
	if (!document.getElementById("placeHolder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeHolder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeName == 3) {
			description.firstChild.nodeValue = text;
		}		
	}	
	return true;
}

/*function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}*/

function prepareGallery() {
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			//alert(showPic(this));
			return !showPic(this);
		}
	}
}

function prepareLinks() {
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute("class") == "popup") {
			links[i].onclick = function() {
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}

function popUp(winURL) {
	window.open(winURL,"popup","width = 800,height = 480");
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

/*function createTag() {
	var getp = document.getElementById("imagegallery");
	var para = document.createElement("p");
	var txt1 = document.createTextNode("haha");
	para.appendChild(txt1);
	getp.appendChild(para);
}*/

addLoadEvent(prepareGallery);
addLoadEvent(prepareLinks);
//addLoadEvent(createTag);
