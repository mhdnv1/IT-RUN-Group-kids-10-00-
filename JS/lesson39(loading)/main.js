window.addEventListener('DOMContentLoaded', ()=>{
    // Loader
    const loader = document.querySelector('.loader');
    setTimeout(function(){
        loader.style.opacity = 0;
        setTimeout(function(){
            loader.style.display = 'none';
        }, 2000)
    }, 2000)
})