const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById("btn");
const color = document.getElementById(".color");

btn.addEventListener("click",function () 
{
    // get randon number bt 0-3
const randomNumber = getRanderNumber();
// console.log(randomNumber);
document.body.style.backgroundColor = colors[randomNumber]; 
color.textContent  = colors[randomNumber];
});
function getRanderNumber(){
    return Math.floor(Math.random() * colors.length); 
}
