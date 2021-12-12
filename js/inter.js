/* 인트로 - 아무곳이나 클릭하면 메인화면으로  ->>>> 윈도우 온클릭은 중복이 안돼서 로고클릭으로 변경 */
let videointro = document.getElementById("videointro");
let gomain = document.getElementById("gomain");

function linkmain() {
        gomain.style.opacity = "0";
        gomain.style.transition = "all 2s";
        videointro.style.opacity = "0";
        videointro.style.transition = "all 2.2s";
        videointro.style.zIndex = "-1";  /*안팎에 넣어봄*/
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

/* 드랍다운창 끄기 */
function closer() {
    dabout.style.display ="none";
    dnews.style.display="none";
}

/* 메인페이지 autoslide */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(dots);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0.2";   
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.opacity = "1";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}




/* 싸잡아서 못주나.. 머리돌아갈때 다시해볼 것*/

function mover() {
    document.querySelector("#sl1").style.opacity = "1";
}

function mover2() {
    document.querySelector("#sl2").style.opacity = "1";    
}


function mover3() {
    document.querySelector("#sl3").style.opacity = "1";    
}


function mover4() {
    document.querySelector("#sl4").style.opacity = "1";    
}


function mover5() {
    document.querySelector("#sl5").style.opacity = "1";    
}



// 로그인폼 + modal

var modal = document.querySelector(".modal");


window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}