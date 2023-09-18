const taskInput = document.querySelector('#taskInput')
const taskList = document.querySelector('.taskList')

function addTask() {
    if (taskInput.value == '') {
        alert("Adicione uma tarefa!")
    } else {
        let li = document.createElement('li')
        li.innerHTML = taskInput.value
        taskList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    taskInput.value = ''
    saveData()
}

taskList.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked")
        saveData()
    } else if (ev.target.tagName === "SPAN"){
        ev.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", taskList.innerHTML)
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data")
}

showData()

