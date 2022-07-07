setInterval(() => {
    let elements = document.getElementsByClassName('bg-white');

    for(var i = 0;i < elements.length; i++) {
        elements[i].classList.remove('bg-white');
    } 

    elements = document.getElementsByClassName('bg-light');

    for(var i = 0;i < elements.length; i++) {
        elements[i].classList.remove('bg-light');
    }
}, 250)
        
   
