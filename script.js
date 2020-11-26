$(function(){
    $(document).scroll(function(){
        var $nav =$("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/* This code is suppost to turn a url to a PDF which is the opposite of what Im looking for, instead I found a way to do it in just raw HTML https://www.w3schools.com/tags/att_a_download.asp
function downloadResume(){
  var oReq = new XMLHttpRequest();
  var URLToPDF = "file:///C:/Users/katel/OneDrive/Desktop/DevCodeCamp/Portfolio2/Resume2.pdf";
  oReq.open("GET", URLToPDF, true);
  oReq.responseType = "blob";

  oReq.onload = function() {
      var file = new Blob([oReq.response], { 
          type: 'application/pdf' 
      });
      saveAs(file, "mypdffilename.pdf");
  };

  oReq.send();
}
 */

