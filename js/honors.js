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

// HONORS OPEN하기 - 미끄러지는 느낌

function honorsOpen() {
    let honors = document.querySelector(".honors");
    let winrec = document.querySelector(".winrec");
    honors.style.width = "100%";
    winrec.style.opacity = "0";
}

// honors 닫기

function olclose() {
    document.querySelector(".seriea-overlay").style.display="none";
}

// logo + honors 연결
function openserieA() {
    document.querySelector(".seriea-overlay").style.display="block";
}
function opencopa() {
    document.querySelector(".copa-overlay").style.display="block";
}
function opencham() {
    document.querySelector(".cham-overlay").style.display="block";
}
function openeuro() {
    document.querySelector(".euro-overlay").style.display="block";
}