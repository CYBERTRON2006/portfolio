function hisob(){    
    let a=document.getElementById("son-a").value
    let b=document.getElementById("son").value
    let c=document.getElementById("son-c").value

    a*=1
    c*=1
    let amal;
    switch(b){
        case'+':amal=a+c;break;
        case'-':amal=a-c;break;
        case'*':amal=a*c;break;
        case '/':if(c==0){ amal = "0 ga bo'linmaydi"}
        else{ amal = a / c; } break;
        default:amal="bunday misol yo'q"
    }

    document.getElementById("matn").innerHTML=amal;
    }
