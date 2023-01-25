
let modal = document.querySelector('.modal')       
let close=document.querySelectorAll('.modal__close')
let btn = document.querySelectorAll('.btn')

btn.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('hide')
        modal.classList.add('show', 'fade')
    }

});

close.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('hide')
        modal.classList.remove('show', 'fade')
    }

});

