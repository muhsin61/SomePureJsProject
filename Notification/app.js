const btn = document.querySelector(".click");
//const notice = document.querySelector(".notice");

btn.addEventListener("click",async()=>{
    let notice = document.createElement("div");
    notice.className = "notice";
    notice.style.right = "10px";
    notice.innerHTML = "I'm a simple notification";
    document.body.appendChild(notice);
    setTimeout(()=>{
        notice.style.right = "-300px";
        notice.remove();
    },1000)
});
