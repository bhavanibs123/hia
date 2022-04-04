var s = 1;  
displaySlides(s);  

function nextSlide(n) {  
    displaySlides(s =s + n);  
}  

function currentSlide(n) {  
    displaySlides(s = n);  
}  

function displaySlides(n) {  
   
    const im= document.getElementById('img1');
    const im1= document.getElementById('img2');
    const im2= document.getElementById('img3');
    const img1=document.getElementById('imgdt1');
    const img2=document.getElementById('imgdt2');
    const img3=document.getElementById('img2dt1');
    const img4=document.getElementById('img2dt2');
    const img5=document.getElementById('img3dt1');
    const img6=document.getElementById('img3dt2');
        fetch("./gallery.json")
        .then(response => {
         return response.json();
        })
        .then(data => {
    
        im.src = data.employees[0].image
        im1.src = data.employees[1].image
        im2.src = data.employees[2].image
        img1.innerHTML=data.employees[0].Designation
        img2.innerHTML=data.employees[0].Year_Of_Experience
        img3.innerHTML=data.employees[1].Designation
        img4.innerHTML=data.employees[1].Year_Of_Experience
        img5.innerHTML=data.employees[2].Designation
        img6.innerHTML=data.employees[2].Year_Of_Experience
        } );
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length)
     { 
         s = 1 
    }  
    if (n < 1) { 
        s = slides.length 
    }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
   slides[s - 1].style.display = "block";  



}