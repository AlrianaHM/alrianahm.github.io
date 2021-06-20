showAllSlides();

function showAllSlides(){
    const portos = document.getElementsByClassName("portofolio");
    for (const p of portos) {
        showSlides(p.id, 1)
    }
}

function showSlides(portoId, idx){
    var slideIndex = idx;
    var i;
    var porto = document.getElementById(portoId)
    var slides = porto.getElementsByClassName("mySlides");
    var dots = porto.getElementsByClassName("dot");
    
    if(slides.length){
        if (idx > slides.length){
            slideIndex = 1;
        }
        if (idx < 1){
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
}

function currentSlide(portoId, idx){
    showSlides(portoId, idx);
}

function plusSlides(portoId, n){
    var idx = 1;
    var porto = document.getElementById(portoId)
    var slides = porto.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        if(slides[i].style.display == "block"){
            idx = i+1;
            break;
        }
    }
    showSlides(portoId, idx+=n);
}

// document.getElementById("porto1").getElementsByClassName("mySlides");