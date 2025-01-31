
let modal = document.getElementById("art1-modal");
let img = document.getElementById("arlecchino");
let modalImg = document.getElementById("art1-img");

let modal2 = document.getElementById("art2-modal");
let img2 = document.getElementById("furina");
let modalImg2 = document.getElementById("art2-img");

let modal3 = document.getElementById("art3-modal");
let img3 = document.getElementById("yaemiko");
let modalImg3 = document.getElementById("art3-img");

let captionText = document.getElementById("caption");


function setupModal(img, modal, modalImg) {
    img.addEventListener("click", function() {
        console.log("click");
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
}

setupModal(img, modal, modalImg);
setupModal(img2, modal2, modalImg2);
setupModal(img3, modal3, modalImg3);

let spans = document.getElementsByClassName("close");

spans[0].onclick = function() {
  modal.style.display = "none";
}

spans[1].onclick = function() {
  modal2.style.display = "none";
}

spans[2].onclick = function() {
  modal3.style.display = "none";
}