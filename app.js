//delete 
const list = document.querySelector('.do-lists ul');

list.addEventListener('click', function (e) {
  
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});
//add
const addList = document.querySelector('.add');
addList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.className == 'addBtn') {
        const value = addList.querySelector('input[type="text"]').value;

        //create
        const createLi = document.createElement('li');
        const listName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add
        deleteBtn.textContent = 'delete';
        listName.textContent = value;

        //add class
        deleteBtn.classList.add('delete');
        listName.classList.add('do-li');
        //append
        createLi.appendChild(listName);
        createLi.appendChild(deleteBtn);
        list.appendChild(createLi);
    }


});
 