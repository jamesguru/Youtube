const menuIcon = document.querySelector('.menuicon');

const menuBar = document.querySelector('.menubar');

const closeIcon = document.querySelector('.closeicon');


menuIcon.addEventListener('click',() =>{

    menuBar.style.display = "flex";
})


closeIcon.addEventListener('click',()=>{

    menuBar.style.display = "none";
})