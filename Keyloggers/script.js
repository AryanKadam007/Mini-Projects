const logDiv= document.getElementById("log");
const stateDiv= document.getElementById("state");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.addEventListener("click",()=>{
  document.addEventListener("keydown",handleDown);
  document.addEventListener("keyup",handleUp);
  start.disabled=true;
  stop.disabled=false;
})


stop.addEventListener("click",()=>{
  document.removeEventListener("keydown",handleDown);
  document.removeEventListener("keyup",handleUp);
  logDiv.textContent = " ";
  stateDiv.textContent= " ";
  stop.disabled=true;
  start.disabled=false;
})

function handleDown(e){
logDiv.textContent= `Key ${e.key} pressed down`;
stateDiv.textContent= "key is down"
}

function handleUp(e){
logDiv.textContent= `Key ${e.key} pressed Up`;
stateDiv.textContent= "key is Up"
}