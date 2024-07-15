function changePage(page_name){
    let resource = `res/subpages/${page_name}.html`;
    let dom = document.getElementById("info-iframe");
    if(dom === null){
        return;
    }
    dom.src = resource;
}

function resetPage(){
    let dom = document.getElementById("info-iframe");
    dom.src = ""
    changePage("greeting")
}

let enlargeBool = false;
function enlargeInfo(){
    let dom = document.querySelector(".grid")
    let domlgrid = document.querySelector("#l-grid")
    let domcontent = document.querySelector("#content")
    let isSmallScreen = screen.width <= 768 || window.innerWidth <= 768;

    if(!isSmallScreen){ // avoid changing dom when mobile ui is in usage
        if(enlargeBool){
            domlgrid.style.display = 'block';
            dom.style.gridTemplateColumns = "50% 50%";
            domcontent.style.gridTemplateColumns= '50% 50%';
        } else {
            domlgrid.style.display = 'none';
            dom.style.gridTemplateColumns = "30% 70%";
            domcontent.style.gridTemplateColumns= '100%';
        }
        enlargeBool = !enlargeBool;
    }
}

function widthMobile(){
    let enlargeDom = document.querySelector(".enlarge")
    if(enlargeDom == null){
        return;
    } 

    if(screen.width <= 768 || window.innerWidth <= 768){
        enlargeDom.style.opacity = 0.5;
        enlargeDom.style.cursor = "not-allowed"
    } else {
        enlargeDom.style.opacity = 1.0;
        enlargeDom.style.cursor = "pointer"
    }
}

window.addEventListener('load', () => {
    widthMobile()
})

window.addEventListener('resize', () => {
    widthMobile()
})