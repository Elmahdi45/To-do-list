let boxContent=document.getElementById("text-content");
let buttonClick=document.getElementById("button");
let addedText=document.getElementById("list-container");



buttonClick.onclick=function(){
     if(boxContent.value==''){
         alert("you have to add a task !!!!");
     }
     else{
         let li=document.createElement("li");
         li.innerHTML=boxContent.value;
         addedText.appendChild(li);

         let span=document.createElement("span");
         span.innerHTML="\u00d7"  
         span.style.color = "orange";
         li.appendChild(span);
     }
     boxContent.value="";
     saveData() 

}
addedText.addEventListener("click",function(d){
         if(d.target.tagName=="LI"){
             d.target.classList.toggle("checked");
             saveData() 
         } 
         else if(d.target.tagName=="SPAN"){
              d.target.parentElement.remove();
              saveData() 
         }
     },false)
function saveData(){
     localStorage.setItem("data",addedText.innerHTML);
}
function showTask(){
     addedText.innerHTML=localStorage.getItem("data");
}
showTask();