const inputEle = document.querySelector(".input");

console.log(inputEle.checked);
const bodyEle = document.querySelector("body");

// inputEle.checked = false;
inputEle.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody(){
   if(inputEle.checked)
   {
      bodyEle.style.background = "black";
    }else{
       bodyEle.style.background = "white";
   }
}
function updateLocalStrorage(){
    localStorage.setItem("mode",JSON.stringify(inputEle.checked))
}

inputEle.addEventListener("input",()=>{
    updateBody();
    updateLocalStrorage();
})



