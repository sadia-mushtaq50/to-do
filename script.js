
// document.addEventListener('DOMContentLoaded',()=>{
//         const todoInput =document.getElementById('todoInput');
//         const addBtton =document.getElementById('addButton');
//         const todoList =document.getElementById('todoList');
//       loadTodos();
//         addBtton.addEventListener('click',()=>{
//             const todoText= todoInput.value.trim();
//             if(todoText){
//                 addTodo(todoText);
//                 todoInput.value='';
//             }
//         });
    
//         function addTodo(todotext){
//             const todoItem = document.createElement('li');
//             todoItem.textContent= todotext;
    
    
//             const deleteButton =document.createElement('button');
//             deleteButton.textContent ='Delete';
//             deleteButton.addEventListener('click',()=>{
//                 todoItem.remove();
//                 saveTodos();
//             });
//             todoItem.appendChild(deleteButton);
//             todoList.appendChild(todoItem);
//         }
//             saveTodos();
    
//             function saveTodos() {
//                         const todos = [];
//                         todoList.querySelectorAll('li').forEach(li => {
//                             todos.push(li.firstChild.textContent);
//                         });
//                         localStorage.setItem('todos', JSON.stringify(todos));
//                     }
                
//                     function loadTodos() {
//                         const todos = JSON.parse(localStorage.getItem('todos')) || [];
//                         todos.forEach(todo => {
//                             addTodo(todo);
//                         });
    
//         }

    
//      })


document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    
    loadTodos();

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodo(todoText);
            todoInput.value = '';
        }
    });

    function addTodo(todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your task:', todoText);
            if (newText) {
                todoItem.firstChild.textContent = newText;
                saveTodos();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoItem.remove();
            saveTodos();
        });

        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('li').forEach(li => {
            todos.push(li.firstChild.textContent);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            addTodo(todo);
        });
    }
});
    