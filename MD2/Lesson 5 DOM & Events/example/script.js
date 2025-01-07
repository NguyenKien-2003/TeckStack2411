const favoriteList = document.getElementById('favorite-list');
const changeContent = document.getElementById('change-content');
const changeColor = document.getElementById('change-color');
const addButton = document.getElementById('add-button');
const input = document.getElementById('item-input');

changeContent.addEventListener('click', ()=>{
    const items = favoriteList.children;
    for (let i = 0; i < items.length; i++) {
        items[i].innerText = "I love this thing";
    }
});

changeColor.addEventListener('click', ()=>{
    const items = favoriteList.children;
    for(let i = 0; i<items.length;i++){
        items[i].style.color = "red";
    }
});

addButton.addEventListener('click', ()=>{
    const newItemText = input.value.trim();
    if (newItemText) {
        favoriteList.innerHTML += `<li class="favorite-list-item">${newItemText}</li>`;
        input.value = '';
    }
});