
document.querySelector("#current_year").textContent = new Date().getFullYear().toString()

const validFiles = ["about"]

function toPage(name){
    const newSrc = `public/subpages/${name}.html`;
    document.querySelector("#content-iframe").src = newSrc;
}

document.querySelector("#nav-home").addEventListener('click', (e) => {
    toPage('home')
})

document.querySelector("#nav-about").addEventListener('click', (e) => {
    toPage('about')
})