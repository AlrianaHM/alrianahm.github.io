var slideIndex = 1;
showAllSlides(slideIndex);

function showAllSlides(){
    const portos = document.getElementsByClassName("portofolio");
    console.log(portos)
    for (const p of portos) {
        showSlides(p.id, 1)
    }
}

function showSlides(portoId, n){
    var i;
    var porto = porto1 = document.getElementById(portoId)
    var slides = porto.getElementsByClassName("mySlides");
    var dots = porto.getElementsByClassName("dot");

    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }

    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(portoId, n){
    showSlides(portoId, slideIndex = n);
}

function plusSlides(portoId,n){
    showSlides(portoId, slideIndex += n);
}