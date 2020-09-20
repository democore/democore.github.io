var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var penguin = this.getElementsByClassName("header-image")[0];
        if (content.style.display === "block") {
            penguin.style.filter = "grayscale(1)";
            penguin.style.opacity = "0.7";
            content.style.display = "none";
        } else {
            content.style.display = "block";
            penguin.style.filter = "grayscale(0)";
            penguin.style.opacity = "1";
        }
    });
}