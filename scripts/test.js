var input = document.getElementById("input");
var show = document.getElementById('show');

input.addEventListener("input", function() {
    show.innerHTML = input.value;
});

