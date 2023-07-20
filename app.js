const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{
    // console.log(entry)
    if (entry.isIntersecting){
        entry.target.classList.add('show')
    }
    else{
        // entry.target.classList.remove('show')
    }
})


})
const hidden_element= document.querySelectorAll(".hidden")

hidden_element.forEach( (element)=>observer.observe(element) )


// window.matchMedia('(prefers-reduced-motion: reduce)');