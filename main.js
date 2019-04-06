// alert("this works");
var myBio = document.getElementById("mybio");
var button = document.querySelector(".learn-more");
var infoShown = false;

button.addEventListener("click", function(){
    
    if(infoShown==false){
        myBio.classList.toggle("my-bio-shown");
        infoShown = true;
        button.innerHTML="Hide Info";   
    }
    else{
        myBio.classList.toggle("my-bio-shown");
        button.innerHTML="Learn more about me"; 
        infoShown = false;
    }
    
});