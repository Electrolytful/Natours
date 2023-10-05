// getting the navigation links and the navigation button DOM elements
const nav_items = document.getElementsByClassName("navigation__item");
const nav_checkbox = document.getElementById("navi-toggle");

// adding a click event listener to each navigation link, which runs an anonymous function that simulates a click event on the navigation button closing the nav menu
for (let item of nav_items) {
    item.addEventListener("click", () => {
        nav_checkbox.click();
    });
}
