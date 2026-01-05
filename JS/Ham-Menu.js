const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu')


hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

document.addEventListener('click', B => {
    if (!hamMenu.contains(B.target) && !offScreenMenu.contains(B.target)) {
        hamMenu.classList.remove('active')
        offScreenMenu.classList.remove('active')
    }
})