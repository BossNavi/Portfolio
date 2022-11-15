
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")


const openTab = tabName => {
    for(tabLink of tabLinks)
    {
        tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents)
    {
        tabContent.classList.remove("active-content");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add("active-content");
}

var sideMenu = document.getElementById("side-menu");

const openMenu = () => {
    sideMenu.style.right = "0";
}

const closeMenu = () => {
    sideMenu.style.right = "-200px";
}