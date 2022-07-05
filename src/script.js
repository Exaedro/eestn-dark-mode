setTimeout(() => {
    const elements = document.getElementsByClassName('dashboard-card-footer');
    
    for(var i = 0;i < elements.length; i++) {
        elements[i].classList.remove('bg-white');
    } 
}, 2000)
        
   
