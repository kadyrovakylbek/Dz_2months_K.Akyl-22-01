const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonsDiv = document.createElement('div')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        buttonsDiv.setAttribute('class', 'buttons_div')
        editButton.setAttribute('class', 'edit_button')
        deleteButton.setAttribute('class', 'delete_button')

        editButton.innerHTML = 'EDIT'
        deleteButton.innerHTML = 'DELETE'

        text.innerText = input.value

        buttonsDiv.append(editButton, deleteButton)
        div.append(text, buttonsDiv)
        todoList.prepend(div)

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            const editedText = prompt(`Edit text: ${text.innerText}`).trim()
            if (editedText === '') {
                return false
            } else {
                text.innerText = editedText
            }
        }

    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)

input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
    event.code === 'Enter' ? createTodo() : false
})






