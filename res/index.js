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
    if(enlargeBool){
        dom.style.gridTemplateColumns = "50% 50%";
    } else {
        dom.style.gridTemplateColumns = "30% 70%";
    }
    enlargeBool = !enlargeBool;
}