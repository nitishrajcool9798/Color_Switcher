const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
buttons.forEach((button)=>{
    button.addEventListener('click',function(event){
        const color = event.target.id
        if(color=='grey' || color=='orange' || color=='blue' || color=='yellow' || color=='red')
        {
            body.style.backgroundColor = color;
        }
    })
})