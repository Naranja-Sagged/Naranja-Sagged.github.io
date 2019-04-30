var imgTogglers = document.getElementsByClassName("toggleImg");
var otherImages = document.getElementsByClassName("images");

for (var i = 0; i < imgTogglers.length; ++i) {
    imgTogglers[i].addEventListener("click", toggleImg);
}

window.addEventListener("load", resizeImgs);

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

function resizeImgs() {
    for (var i = 0; i < otherImages.length; ++i) {
        var lis = otherImages[i].children;

        for (var j = 0; j < lis.length; ++ j) {
            lis[j].style.height = lis[j].offsetWidth + "px";
        }
    }
}