const input = document.querySelector('.task')
const add = document.querySelector('.add')
const list = document.querySelector('ul')

let allTodo = []
if(localStorage.getItem("todoSave") != '') {
    allTodo += localStorage.getItem("todoSave")
    allTodo = allTodo.split(',')
    allTodo.forEach((e) => {
        const todo = document.createElement('li')
        const tools = document.createElement('span')
        const paragraph = document.createElement('b')
        paragraph.textContent = [e];
        todo.appendChild(paragraph)
        list.appendChild(todo);
        todo.appendChild(tools)
        const btn = document.createElement('button')
        const doneBtn = document.createElement('i')
        doneBtn.classList.add('fas')
        doneBtn.classList.add('fa-check')
        tools.appendChild(btn)
        btn.classList.add('donebtn')
        btn.appendChild(doneBtn)
        const btn2 = document.createElement('button')
        btn2.classList.add('removebtn')
        const removeBtn = document.createElement('i')
        removeBtn.classList.add('fas')
        removeBtn.classList.add('fa-trash')
        tools.appendChild(btn2)
        btn2.appendChild(removeBtn)
        const btn3 = document.createElement('button')
        btn3.classList.add('far')
        btn3.classList.add('edit')
        btn3.classList.add('fa-edit')
        tools.appendChild(btn3)
    })
}

add.addEventListener('click', () => {
    if(input.value != '') {
        const actTodo = input.value;
        allTodo.push(actTodo);
        localStorage.setItem("todoSave", allTodo);
        const todo = document.createElement('li')
        const tools = document.createElement('span')
        const paragraph = document.createElement('b')
        paragraph.textContent = actTodo;
        todo.appendChild(paragraph)
        list.appendChild(todo);
        todo.appendChild(tools)
        const btn = document.createElement('button')
        btn.classList.add('donebtn')
        const doneBtn = document.createElement('i')
        doneBtn.classList.add('fas')
        doneBtn.classList.add('fa-check')
        tools.appendChild(btn)
        btn.appendChild(doneBtn)
        const btn2 = document.createElement('button')
        btn2.classList.add('removebtn')
        const removeBtn = document.createElement('i')
        removeBtn.classList.add('fas')
        removeBtn.classList.add('fa-trash')
        tools.appendChild(btn2)
        btn2.appendChild(removeBtn)
        const btn3 = document.createElement('button')
        btn3.classList.add('far')
        btn3.classList.add('edit')
        btn3.classList.add('fa-edit')
        tools.appendChild(btn3)
    }
})


//EDIT EVENT
const modal = document.querySelector('.modal')
let actLi;
let index;
const changeName = document.querySelector('.change')
const nothing = document.querySelector('.nothing')
const inputNew = document.querySelector('.newinp')
const editevent = () => {
    console.log(actLi.firstChild.textContent);
}

list.addEventListener('click', (e) => {
    if(e.target.closest('button').classList.contains('donebtn')) {
        e.target.closest('li').classList.toggle('done')
        e.target.closest('i').classList.toggle('done')
    }
    else if(e.target.closest('button').classList.contains('removebtn')) {
        e.target.closest('li').remove()
        allTodo.splice(allTodo.indexOf(e.target.closest('li').textContent), 1) 
        localStorage.setItem("todoSave", allTodo);
    }
    else if(e.target.closest('button').classList.contains('edit')) {
        actLi = e.target.closest('li');
        modal.style.transform = 'translate(-50%, 0%)'
        inputNew.value = ''
        index = allTodo.indexOf(e.target.closest('li').textContent)
        editevent()
    }
    else {
        console.log('błedny klik');
    }
})

const close = document.querySelector('.close')
close.addEventListener('click', () => {
    modal.style.transform = 'translate(-50%, 100%)'
})

nothing.addEventListener('click', () => {
    modal.style.transform = 'translate(-50%, 100%)'
    inputNew.value = ''
})
changeName.addEventListener('click', () => {
    if(inputNew.value != '') {
        actLi.firstChild.textContent = inputNew.value
        allTodo[index] = inputNew.value
        localStorage.setItem("todoSave", allTodo);
        inputNew.value = ''
        modal.style.transform = 'translate(-50%, 100%)'

    }
})


