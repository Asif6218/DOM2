function increment(){
    let count1=document.getElementById("counter");
    let currentcount =count1.innerText;
    let updatedcount = parseInt(currentcount)+1;
    count1.innerHTML=updatedcount;
}
function decrement(){
    let count1=document.getElementById("counter");
    let currentcount =count1.innerText;
    let updatedcount = parseInt(currentcount)-1;
    count1.innerHTML=updatedcount;
}
function reset(){
    let count1=document.getElementById("counter");
    count1.innerHTML=0;
}