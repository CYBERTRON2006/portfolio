let a=document.querySelector('.menu i')

let main=document.querySelector(".box2")


let i=0;

a.addEventListener('click', function(){

    if(i%2==0){
        main.classList.toggle('active');

        a.classList.remove('fa-bars')
        a.classList.add('fa-x')
    }else{
        main.classList.toggle('active');
        a.classList.add('fa-bars')
        a.classList.remove('fa-x')
    }   
    i++

    console.log(i);
})


