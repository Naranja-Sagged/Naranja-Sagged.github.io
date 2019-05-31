var imgTogglers = document.getElementsByClassName("toggleImg");
var otherImages = document.getElementsByClassName("images");
var tabSwitchers = document.getElementsByClassName("switchTab");
var curTab = document.getElementById("pics");
var audioPlayers = document.getElementsByClassName("playAudio");
var playAll = document.getElementById("playAll");
var stopAll = document.getElementById("stopAll");
var audioClones = [];

for (var i = 0; i < audioPlayers.length; ++i) {
    audioPlayers[i].addEventListener("click", playAudio);
    audioPlayers[i].addEventListener("startAllAudio", playAudio);
}

for (var i = 0; i < imgTogglers.length; ++i) {
    imgTogglers[i].addEventListener("click", toggleImg);
}

for (var i = 0; i < tabSwitchers.length; ++i) {
    tabSwitchers[i].addEventListener("click", switchTab);
}

playAll.addEventListener("click", playAllAudio);
stopAll.addEventListener("click", stopAllAudio);

window.addEventListener("load", resizeImgs);
window.addEventListener("resize", resizeImgs);

var playAudioEvent = new CustomEvent("startAllAudio");
function playAllAudio() {
    for (var i = 0; i < audioPlayers.length; ++i) {
        audioPlayers[i].dispatchEvent(playAudioEvent);
    }
}

function stopAllAudio() {
    console.log(audioClones.length);
    for (var i = 0; i < audioClones.length; ++i) {
        audioClones[i].pause();
    }
}

function playAudio() {
    var audioId = this.attributes["linked-audio"].value;
    var audio = document.getElementById(audioId);
    var clone = audio.cloneNode(true);
    audioClones.push(clone); 
    clone.play();
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

function resizeImgs() {
    for (var i = 0; i < otherImages.length; ++i) {
        if (otherImages[i].id == "sounds") { // DO NOT RESIZE SOUND BOARD FKER!!!!!
            continue;
        }
        var lis = otherImages[i].children;

        for (var j = 0; j < lis.length; ++j) {
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