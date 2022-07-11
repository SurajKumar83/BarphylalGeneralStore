
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