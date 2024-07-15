

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