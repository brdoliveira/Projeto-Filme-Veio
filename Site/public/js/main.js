var navList = document.getElementById("nav-lists");

function Show() {
    if (navList.value == 1) {
        navList.classList.remove("_Menus-show");
        navList.value = 0;
    } else {
        navList.classList.add("_Menus-show");
        navList.value = 1;
    }

}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}