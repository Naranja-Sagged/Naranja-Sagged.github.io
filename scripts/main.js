var imgTogglers = document.getElementsByClassName("toggleImg");

for (var i = 0; i < imgTogglers.length; ++i) {
    imgTogglers[i].addEventListener("click", toggleImg);
}

function toggleImg() {
    var picId = this.attributes["linked-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className == "hidden") {
        pic.className = "";
    }
    else {
        pic.className = "hidden";
    }
}