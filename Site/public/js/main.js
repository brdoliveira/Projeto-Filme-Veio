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