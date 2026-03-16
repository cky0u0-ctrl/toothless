let mainMenu = document.querySelectorAll(".main-menu-wrap>li");
console.log(mainMenu);
let subMenu = document.querySelectorAll(".sub-menu-wrap>.submenu2");
console.log(subMenu);

mainMenu.forEach((tab, id) => {
    tab.addEventListener("click", () => {
        mainMenu.forEach((t, i) => {
            t.classList.remove("active");
            subMenu[i].classList.remove("active");
        })
        tab.classList.add("active");
        subMenu[id].classList.add("active")
    })
})
