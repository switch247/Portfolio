let inputs = document.getElementById("inp");
let dash =document.querySelector(".to-do-list ul")

icons = document.querySelectorAll(".to-do-list i")
icons.forEach(element => {
    element.addEventListener('click',  function(){
        element.parentElement.parentElement.remove()
    })
});
function add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }
    else{
        let new_ele= document.createElement("li")
        new_ele.innerHTML= `<label><input type="checkbox"><p>${inputs.value}</p><span></span>  <i class="fa-sharp fa-solid fa-trash"></i></label>`;
        dash.appendChild(new_ele)
        inputs.value =''
        new_ele.querySelector("i").addEventListener('click',remove)
        function remove(){
            new_ele.remove()
        }

        

        
    }
}