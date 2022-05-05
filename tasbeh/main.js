let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let reset = document.querySelector('.reset');
let p=document.querySelector('p')

btn.addEventListener('click', function(){
    if(parseInt(input.value) < 33){
        p.innerHTML = "Subhanollox"
        p.style.display = "block"
    }
    
    else if(parseInt(input.value)>33 && parseInt(input.value)<=66){
        p.innerHTML = "Alhamdulillah"
    }
    else if(parseInt(input.value)>66 && parseInt(input.value)<=99){
        p.innerHTML = "Allohu Akbar"
    }
    input.value = parseInt(input.value) + 1;
})

reset.addEventListener('click', function(){
    input.value= 0
    p.style.display = "none"
})




