

function favorite(){

    const heart = document.querySelector(".heart > i.red");
    
    if(heart){
        heart.classList.remove("red")
    }
    else{
        const heart = document.querySelector(".heart > i");
        heart.classList.add("red");
    }
}