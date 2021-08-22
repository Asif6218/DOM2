let rootEl=document.getElementById("root");

let count=document.createElement("h1");
count.innerHTML=0;
rootEl.appendChild(count);

let incrementbn=document.createElement("button");
incrementbn.setAttribute("onclick","increment()");
incrementbn.innerText="increment"
rootEl.appendChild(incrementbn);

let decrementbn=document.createElement("button");
decrementbn.setAttribute("onclick","decrement()");
decrementbn.innerText="decrement"
rootEl.appendChild(decrementbn);

let resetbn=document.createElement("button");
resetbn.setAttribute("onclick","reset()");
resetbn.innerText="reset"
rootEl.appendChild(resetbn);





function increment(){
    // let count1=document.getElementById("counter");
    let currentcount =count.innerText;
    let updatedcount = parseInt(currentcount)+1;
    count.innerHTML=updatedcount;
}
function decrement(){
    // let count1=document.getElementById("counter");
    let currentcount =count.innerText;
    let updatedcount = parseInt(currentcount)-1;
    count.innerHTML=updatedcount;
}
function reset(){
    // let count1=document.getElementById("counter");
    count.innerHTML=0;
}