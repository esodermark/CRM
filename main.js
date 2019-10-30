document.addEventListener("DOMContentLoaded", function(e){
 document.getElementById("img1").addEventListener("click", addActive);
 document.getElementById("img2").addEventListener("click", addActive);
 document.getElementById("img3").addEventListener("click", addActive);
 document.getElementById("img4").addEventListener("click", addActive);
 document.getElementById("img5").addEventListener("click", addActive);



 function addActive () {
     let list = document.getElementsByClassName("active");
     for (let element of list) {
       element.classList.remove("active");
     }
     document.querySelector(".container" + this.id[this.id.length-1]).classList.add("active");
     
     let listSelected = document.getElementsByClassName("selected");
     for (let element of listSelected) {
       element.classList.remove("selected");
     }
     document.getElementById(this.id).parentNode.classList.add("selected");
}

});