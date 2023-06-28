const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.header ul');

toggleBtn.addEventListener("click" , ()=>{
menu.classList.toggle('toggle');
})

