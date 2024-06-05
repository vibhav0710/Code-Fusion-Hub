const inputValue = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
// const deleteBtn = document.getElementById('delete')

function addToDo() {
    let inputText = document.getElementById('todoInput').value.trim();

    if (inputText !== '') {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td><input type="checkbox"></td>
        <td>${inputText}</td>
        <td><a href='#' class="btn btn-outline-danger delete rounded-circle">X</a></td>
        `;

        todoList.appendChild(tr)
        inputValue.value = ''
    }
}

function deleteTodo(el) {
    if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove()
    }
}


function completedTodo(el) {
    let checkboxes = document.querySelectorAll("#todoList input[type='checkbox']")
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (el.checked) {
                el.parentElement.nextElementSibling.classList.add('lineThrough')
            }
    
            else {
                el.parentElement.nextElementSibling.classList.remove('lineThrough')
            }
        })
    })
}


// Adding todo on pressing add btn
addBtn.addEventListener('click', addToDo)

// Adding todo on pressing enter
inputValue.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addToDo()
    }
})

// Deleting todo from list
todoList.addEventListener('click', (e) => {
    deleteTodo(e.target)
})

// Marking todo as done
todoList.addEventListener('click', (e) => {
    completedTodo(e.target)
}
)