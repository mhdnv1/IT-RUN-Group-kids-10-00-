window.addEventListener("DOMContentLoaded", () => {
    
  
    //Modal
  
    const modalTrriger = document.querySelectorAll("[data-modal]"),
      modal = document.querySelector(".modal"),
      modalClose = document.querySelector("[data-close]");
  
    modalTrriger.forEach( btn => {
      btn.addEventListener("click", () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
      });
    });
  
    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
  
    modalClose.addEventListener("click", closeModal);
  
    modal.addEventListener('click' , (e)=>{
        if (e.target == modal) {
            closeModal()
        }
    })
  
    document.addEventListener('keydown', (e)=>{
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })  
  });
  