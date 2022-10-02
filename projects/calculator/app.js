var disp =document.getElementsByName("display")[0]
var but =document.querySelectorAll(".but")

let buttonlist = Array.from(but)
but.forEach(button=>{

button.addEventListener("click",function(){
    if(button.value=="AC"){
        disp.value=''}
    else if(button.value=="DE"){
        disp.value=disp.value.toString().slice(0,-1)
        // disp.value=disp.value.substring(0,disp.value.length)
    }   
    else if(button.value=="="){
        disp.value=eval(disp.value);
        console.log(eval(disp.value))}
    else{
    disp.value +=button.value
    }
})

})
console.log(buttonlist)
