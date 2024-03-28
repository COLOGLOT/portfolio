var menu = document.querySelector('#button_content');
document.querySelector('#btn').addEventListener('click', () => {
    if(menu.classList.contains('menu')){
        menu.classList.remove('menu');
    }
    else{
        menu.classList.add('menu');
    }
})