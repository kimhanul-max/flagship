const icon = document.querySelector("#menu-icon");
const contents = document.querySelector("nav");
const app = document.querySelector(".app");
const flagship = document.querySelector(".flagship");
const github = document.querySelector(".github");
const body = document.querySelector(".body");
const title = document.querySelector(".title");
function goApp(){
    location.href = "app.html";
}
function goFlagship(){
    window.open("https://ko.wikipedia.org/wiki/%EA%B9%83%EB%8C%80%EC%A2%85", "_blank");
}
function goGithub(){
    window.open("https://github.com/kimhanul-max/flagship", "_blank");
}
function goTitle(){
    location.href = "index.html"
}

app.addEventListener("click", goApp);
flagship.addEventListener("click", goFlagship);
github.addEventListener("click", goGithub);
title.addEventListener("click", goTitle);

icon.addEventListener("click", () => {
    if (contents.dataset.isOpen == "true") {
        contents.style.display = "none";
        contents.dataset.isOpen = "false";
    } else {
        contents.style.display = "block";
        contents.dataset.isOpen = "true";
    }
})