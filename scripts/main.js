var imgTogglers = document.getElementsByClassName("toggleImg");
var otherImages = document.getElementsByClassName("images");
var tabSwitchers = document.getElementsByClassName("switchTab");
var curTab = document.getElementById("pics");

for (var i = 0; i < imgTogglers.length; ++i) {
    imgTogglers[i].addEventListener("click", toggleImg);
}

for (var i = 0; i < tabSwitchers.length; ++i) {
    tabSwitchers[i].addEventListener("click", switchTab);
}

window.addEventListener("load", resizeImgs);
window.addEventListener("resize", resizeImgs);

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

function switchTab() {
    var tabId = this.attributes["linked-tab"].value;
    var tab = document.getElementById(tabId);
    if (tab != curTab) {
        curTab.className = "hidden images";
        tab.className = "images";
        curTab = tab;
        resizeImgs();
    }
}
