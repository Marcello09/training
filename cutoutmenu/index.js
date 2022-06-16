const listItens = [...document.getElementsByTagName('li')];
listItens.forEach(item => {
    item.addEventListener('click', () => {
        listItens.forEach(li => {
            li.classList.remove('selected');
        });
        item.classList.toggle('selected');
    });
});