const nav_items = document.getElementsByClassName("navigation__item");
const nav_checkbox = document.getElementById("navi-toggle");

for (let item of nav_items) {
    item.addEventListener("click", () => {
        nav_checkbox.click();
    });
}
