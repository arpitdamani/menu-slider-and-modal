const toggle = document.getElementById('toggle');
const Open = document.getElementById('open');
const Close = document.getElementById('close');
const modal = document.getElementById('modal');

//Toggle nav
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//Show modal
Open.addEventListener('click', () => modal.classList.add('show-modal'));

//Hide modal
Close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal on outside click
window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') : false
})

