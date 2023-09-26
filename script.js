

var text        
var container
document.addEventListener('DOMContentLoaded',function(){
    text = document.getElementById("input");
    container = document.querySelector(".container");

});
function ADD(){
    if(text.value == ""){
           alert("Enter The Task..");
        }
        else{
            var createdTask = document.createElement("ul");
            createdTask.innerHTML=`<span>${text.value}</span><i class="fa-solid fa-circle-check"></i>  <i class="fa-sharp fa-solid fa-trash"></i>`;
            container.appendChild(createdTask);
            
             text.value="";
             var checkIcon = createdTask.querySelector(".fa-circle-check");
             var textSpan = createdTask.querySelector("span");
     
             createdTask.querySelector(".fa-trash").addEventListener("click", remove);
             checkIcon.addEventListener("click", toggleCheck);
     
             function remove() {
                 createdTask.remove();
             }
     
             function toggleCheck() {
                 if (textSpan.style.textDecoration === "line-through") {
                     textSpan.style.textDecoration = "none";
                 } else {
                     textSpan.style.textDecoration = "line-through";
                 }
             }
        }
}

