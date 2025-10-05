
document.getElementById("search").addEventListener("input", () => {
    let search = document.getElementById("search").value.trim().toLowerCase();
    const term = search;
    document.querySelectorAll(".projects .box1").forEach(task => {
        const match = task.textContent.toLowerCase().includes(term);
        task.style.display = match ? "flex" : "none";
    });
})
document.getElementById("button").addEventListener("click",function(){
    document.getElementById("search").focus();
})

let widthfind=document.getElementById("header").offsetHeight + 30;
document.getElementById("Projects").style.paddingTop=widthfind +"px"
document.getElementById("About").style.paddingTop=widthfind +"px"
