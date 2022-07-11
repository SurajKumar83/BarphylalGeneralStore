
const bar=document.getElementById("bar");
const cart=document.getElementById("cart");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        bar.classList.add('remove');
        cart.classList.add('remove');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        bar.classList.remove('remove');
        cart.classList.remove('remove');
    })
}
var slidetag=document.getElementById("slidetag");
const left=document.getElementById("left");

const right=document.getElementById("right");
var images=new Array(
    "caramel-biscuits-950707-1.webp",
    "Spice-Market_Background.webp",
    "production_of_pulses_-Vertical.webp",
    "shell-oils-lubricants-header.webp",
);
const btms1=document.getElementById("btmslide1");
const btms2=document.getElementById("btmslide2");
const btms3=document.getElementById("btmslide3");
const btms4=document.getElementById("btmslide4");
let len=images.length;

var i=0;
function slider(){
    if(i>len-1){
        i=0;
    }
    if(i==0){
        btms1.classList.add('active');
        btms2.classList.remove('active');
        btms3.classList.remove('active');
        btms4.classList.remove('active');
    }
    if(i==1){
        btms1.classList.remove('active');
        btms2.classList.add('active');
        btms3.classList.remove('active');
        btms4.classList.remove('active');
    }
    if(i==2){
        btms1.classList.remove('active');
        btms2.classList.remove('active');
        btms3.classList.add('active');
        btms4.classList.remove('active');
    }
    if(i==3){
        btms1.classList.remove('active');
        btms2.classList.remove('active');
        btms3.classList.remove('active');
        btms4.classList.add('active');
    }
    slidetag.src=images[i];
    i++;
    setTimeout('slider()',3000);
    
}


if(left){
    left.addEventListener('click',()=>{
        if(i==0){i=len-1;}
        else{i=i-1;}
        if(i==0){
            btms1.classList.add('active');
            btms2.classList.remove('active');
            btms3.classList.remove('active');
            btms4.classList.remove('active');
        }
        else if(i==1){
            btms1.classList.remove('active');
            btms2.classList.add('active');
            btms3.classList.remove('active');
            btms4.classList.remove('active');
        }
        else if(i==2){
            btms1.classList.remove('active');
            btms2.classList.remove('active');
            btms3.classList.add('active');
            btms4.classList.remove('active');
        }
        else{
            btms1.classList.remove('active');
            btms2.classList.remove('active');
            btms3.classList.remove('active');
            btms4.classList.add('active');
        }
        slidetag.src=images[i];
        
    })
}
if(right){
    right.addEventListener('click',()=>{
        
        i=(++i)%4;
        
        if(i==0){
            btms1.classList.add('active');
            btms2.classList.remove('active');
            btms3.classList.remove('active');
            btms4.classList.remove('active');
        }
        else if(i==1){
            btms1.classList.remove('active');
            btms2.classList.add('active');
            btms3.classList.remove('active');
            btms4.classList.remove('active');
        }
       else if(i==2){
            btms1.classList.remove('active');
            btms2.classList.remove('active');
            btms3.classList.add('active');
            btms4.classList.remove('active');
        }
        else{
            btms1.classList.remove('active');
            btms2.classList.remove('active');
            btms3.classList.remove('active');
            btms4.classList.add('active');
        }
        console.log(i);
        slidetag.src=images[i];
       
    })
}

btms1.addEventListener('click',()=>{
    i=0;
    btms1.classList.add('active');
    btms2.classList.remove('active');
    btms3.classList.remove('active');
    btms4.classList.remove('active');
    slidetag.src=images[i];
})
btms2.addEventListener('click',()=>{
    i=1;
    btms1.classList.remove('active');
    btms2.classList.add('active');
    btms3.classList.remove('active');
    btms4.classList.remove('active');
    slidetag.src=images[i];
})
btms3.addEventListener('click',()=>{
    i=2;
    btms1.classList.remove('active');
    btms2.classList.remove('active');
    btms3.classList.add('active');
    btms4.classList.remove('active');
    slidetag.src=images[i];
})
btms4.addEventListener('click',()=>{
    i=3;
    btms1.classList.remove('active');
    btms2.classList.remove('active');
    btms3.classList.remove('active');
    btms4.classList.add('active');
    slidetag.src=images[i];
})