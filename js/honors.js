/* 인트로 - 아무곳이나 클릭하면 메인화면으로  */
let videointro = document.getElementById("videointro");

function linkmain() {
    window.onclick = function(event) {
        if(event.target == videointro) {
             videointro.style.opacity = "0";
            videointro.style.transition = "all 2s";
        }
        videointro.style.zIndex = "-1";  
    }
}

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
