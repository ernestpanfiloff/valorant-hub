// Get control of header menu
let headerMenu = document.querySelector("#header-menu")

// Menu items
const menuLinks = [
    {
        name: "Home",
        url: "#"
    },
    {
        name: "Agents",
        url: "#"
    },
    {
        name: "Maps",
        url: "#"
    }
]

// Add items to a string
const headerMenuItems = ""

for (let item of menuLinks) {
    headerMenu.innerHTML += `
    <li><a href="${item.url}">${item.name}</a></li>
    `
}

