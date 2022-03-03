const panels = document.querySelectorAll('.panel');
const actives = document.querySelectorAll('.active');

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })  
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })  
}

panels.forEach((panel) => {
    panel.addEventListener('mouseout', () =>{
        panel.classList.remove('active')
    })  
})