var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elInputName = document.querySelector('.input__name');
var elList = document.querySelector('.list__icdo');
var elListName = document.querySelector('.list__name');
var elBtn = document.querySelector('.btn__item');
var todos = [];

elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   var inputValue = elInput.value.trim();
   var inputName = elInputName.value.trim();

   elInput.value = null;
   elInputName.value = null;

   var todo = {
      id: todos.length,
      title: inputValue,
      author: inputName,
      btn: 'delete',
   };

   todos.push(todo);

   elList.innerHTML = null;
   elListName.innerHTML = null;

   for (var item of todos) {
      var newLi = document.createElement('li');
      newLi.textContent = item.title;
      newLi.classList.add('execution__item');
      newLi.classList.add('p-2');
      newLi.classList.add('m-2');
      elList.appendChild(newLi);
   }

   for (var item of todos) {
      var newLi = document.createElement('li');
      newLi.textContent = item.author;
      newLi.classList.add('execution__item');
      newLi.classList.add('p-2');
      newLi.classList.add('m-2');
      elListName.appendChild(newLi);
   }

   var newBtnLi = document.createElement('button');
   newBtnLi.textContent = item.btn;

   newBtnLi.classList.add('class', 'btn-primary');
   newBtnLi.classList.add('class', 'btn');
   newBtnLi.classList.add('class', 'btn_list');
   newBtnLi.classList.add('class', 'nav');
   newBtnLi.classList.add('class', 'flex-column');
   newBtnLi.classList.add('class', 'd-block');
   newBtnLi.classList.add('class', 'p-2');
   newBtnLi.classList.add('class', 'm-2');


   elBtn.appendChild(newBtnLi);
});