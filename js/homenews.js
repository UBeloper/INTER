/* 메뉴 클릭시 드랍다운 */
let dabout = document.querySelector(".drop-content-about");
let dnews = document.querySelector(".drop-content-news");

function dropabout() {
    dabout.style.display ="block";
    dnews.style.display="none";
}
function dropnews() {
    dabout.style.display="none";
    dnews.style.display ="block";
}

/* 드랍다운창 끄기 */
function closer() {
    dabout.style.display ="none";
    dnews.style.display="none";
}







// 로그인폼 + modal

var modal = document.querySelector(".modal");

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}